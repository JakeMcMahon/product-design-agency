<?php
/**
 * Contact Form API Endpoint
 * 
 * Handles submissions from the main contact form
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once '../includes/functions.php';

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON input', 400);
    }
    
    // Sanitize input
    $data = sanitizeInput($input);
    
    // Validate required fields
    $requiredFields = ['name', 'email', 'company', 'industry', 'challenge', 'message'];
    $errors = [];
    
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            $errors[] = "Field '$field' is required";
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !validateEmail($data['email'])) {
        $errors[] = 'Invalid email format';
    }
    
    if (!empty($errors)) {
        sendJsonResponse(['error' => 'Validation failed', 'details' => $errors], 400);
    }
    
    // Rate limiting - max 5 submissions per hour per IP
    $clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $rateLimitKey = 'contact_form_' . $clientIP;
    
    // Simple rate limiting using file system
    $rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($rateLimitKey) . '.tmp';
    $currentTime = time();
    
    if (file_exists($rateLimitFile)) {
        $lastSubmissions = json_decode(file_get_contents($rateLimitFile), true) ?: [];
        $recentSubmissions = array_filter($lastSubmissions, function($timestamp) use ($currentTime) {
            return ($currentTime - $timestamp) < 3600; // 1 hour
        });
        
        if (count($recentSubmissions) >= 5) {
            sendJsonResponse(['error' => 'Rate limit exceeded. Please try again later.'], 429);
        }
        
        $recentSubmissions[] = $currentTime;
    } else {
        $recentSubmissions = [$currentTime];
    }
    
    file_put_contents($rateLimitFile, json_encode($recentSubmissions));
    
    // Prepare lead data
    $leadData = [
        'email' => $data['email'],
        'name' => $data['name'],
        'company' => $data['company'],
        'phone' => $data['phone'] ?? '',
        'industry' => $data['industry'],
        'challenge' => $data['challenge'],
        'budget' => $data['budget'] ?? '',
        'contact_preference' => $data['contact_preference'] ?? '',
        'source' => 'contact_form'
    ];
    
    // Create or update lead
    $lead = createOrUpdateLead($leadData);
    
    // Store contact form specific data
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("
        INSERT INTO contact_submissions 
        (lead_id, message, project_details, urgency, current_pain_points, desired_outcomes, timeline, decision_makers) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $lead['id'],
        $data['message'],
        $data['project_details'] ?? '',
        $data['urgency'] ?? '',
        json_encode($data['pain_points'] ?? []),
        json_encode($data['desired_outcomes'] ?? []),
        $data['timeline'] ?? '',
        json_encode($data['decision_makers'] ?? [])
    ]);
    
    // Log activity
    logLeadActivity($lead['id'], 'form_submit', 'Contact form submitted', $data);
    
    // Send notification email (implement your email service)
    $emailSubject = "New Contact Form Submission - " . $data['company'];
    $emailBody = "New lead from contact form:\n\n";
    $emailBody .= "Name: " . $data['name'] . "\n";
    $emailBody .= "Email: " . $data['email'] . "\n";
    $emailBody .= "Company: " . $data['company'] . "\n";
    $emailBody .= "Industry: " . $data['industry'] . "\n";
    $emailBody .= "Challenge: " . $data['challenge'] . "\n";
    $emailBody .= "Budget: " . ($data['budget'] ?? 'Not specified') . "\n";
    $emailBody .= "Message: " . $data['message'] . "\n";
    
    // TODO: Send actual email
    error_log("Contact form submission: " . $emailSubject);
    
    sendJsonResponse([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
        'lead_id' => $lead['uuid'],
        'score' => $lead['score']
    ]);
    
} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendJsonResponse([
        'error' => 'An error occurred while processing your request',
        'message' => $e->getMessage()
    ], $statusCode);
}
?>