<?php
/**
 * Consultation Booking API Endpoint
 * 
 * Handles consultation booking form submissions
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
    $requiredFields = ['name', 'email', 'company', 'industry', 'challenge'];
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
    
    // Rate limiting
    $clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $rateLimitKey = 'consultation_' . $clientIP;
    $rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($rateLimitKey) . '.tmp';
    $currentTime = time();
    
    if (file_exists($rateLimitFile)) {
        $lastSubmissions = json_decode(file_get_contents($rateLimitFile), true) ?: [];
        $recentSubmissions = array_filter($lastSubmissions, function($timestamp) use ($currentTime) {
            return ($currentTime - $timestamp) < 3600; // 1 hour
        });
        
        if (count($recentSubmissions) >= 3) {
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
        'contact_preference' => $data['contactPreference'] ?? '',
        'source' => 'consultation'
    ];
    
    // Create or update lead
    $lead = createOrUpdateLead($leadData);
    
    // Store consultation specific data
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("
        INSERT INTO consultation_submissions 
        (lead_id, preferred_date, preferred_time, timezone, consultation_type, specific_goals, current_challenges, meeting_attendees) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $lead['id'],
        $data['preferred_date'] ?? null,
        $data['preferred_time'] ?? '',
        $data['timezone'] ?? '',
        $data['consultation_type'] ?? 'strategy',
        $data['specific_goals'] ?? '',
        $data['message'] ?? '',
        json_encode($data['attendees'] ?? [])
    ]);
    
    // Log activity
    logLeadActivity($lead['id'], 'consultation_request', 'Consultation booking requested', $data);
    
    // Send notification email
    $emailSubject = "New Consultation Request - " . $data['company'];
    $emailBody = "New consultation request:\n\n";
    $emailBody .= "Name: " . $data['name'] . "\n";
    $emailBody .= "Email: " . $data['email'] . "\n";
    $emailBody .= "Company: " . $data['company'] . "\n";
    $emailBody .= "Industry: " . $data['industry'] . "\n";
    $emailBody .= "Challenge: " . $data['challenge'] . "\n";
    $emailBody .= "Budget: " . ($data['budget'] ?? 'Not specified') . "\n";
    $emailBody .= "Contact Preference: " . ($data['contactPreference'] ?? 'Not specified') . "\n";
    $emailBody .= "Lead Score: " . $lead['score'] . "\n";
    
    if (!empty($data['message'])) {
        $emailBody .= "Message: " . $data['message'] . "\n";
    }
    
    error_log("Consultation request: " . $emailSubject);
    
    sendJsonResponse([
        'success' => true,
        'message' => 'Thank you! Your consultation request has been submitted. Our team will contact you within 2 hours to schedule your session.',
        'lead_id' => $lead['uuid'],
        'score' => $lead['score'],
        'next_steps' => [
            'We\'ll review your information within 2 hours',
            'A senior AI strategist will contact you within 24 hours',
            'We\'ll schedule your 30-minute consultation at your convenience'
        ]
    ]);
    
} catch (Exception $e) {
    error_log("Consultation booking error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendJsonResponse([
        'error' => 'An error occurred while processing your consultation request',
        'message' => $e->getMessage()
    ], $statusCode);
}
?>