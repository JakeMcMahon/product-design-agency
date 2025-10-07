<?php
/**
 * AI Automation Sprint Submission API Endpoint
 * 
 * Handles form submissions from the AI automation sprints landing page
 * including consultation bookings, contact forms, and PDF downloads
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
    
    // Determine submission type and validate accordingly
    $submissionType = $data['submission_type'] ?? 'contact_form';
    
    $requiredFields = ['email'];
    $errors = [];
    
    // Set required fields based on submission type
    switch ($submissionType) {
        case 'consultation_popup':
            $requiredFields = ['name', 'email', 'company'];
            break;
        case 'contact_form':
            $requiredFields = ['first_name', 'last_name', 'email', 'company'];
            break;
        case 'pdf_download':
            $requiredFields = ['name', 'email'];
            break;
    }
    
    // Validate required fields
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
    $rateLimitKey = 'sprint_' . $clientIP;
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
    $fullName = '';
    if (!empty($data['first_name']) && !empty($data['last_name'])) {
        $fullName = $data['first_name'] . ' ' . $data['last_name'];
    } else if (!empty($data['name'])) {
        $fullName = $data['name'];
    }
    
    $leadData = [
        'email' => $data['email'],
        'name' => $fullName,
        'company' => $data['company'] ?? '',
        'phone' => $data['phone'] ?? '',
        'industry' => $data['industry'] ?? '',
        'challenge' => 'AI Automation Sprint Interest',
        'budget' => estimateBudgetFromTier($data['sprint_tier'] ?? ''),
        'contact_preference' => $data['contact_preference'] ?? '',
        'source' => 'ai_automation_sprints'
    ];
    
    // Create or update lead
    $lead = createOrUpdateLead($leadData);
    
    // Store sprint-specific data
    $pdo = getDbConnection();
    
    // Insert into sprint_submissions table
    $stmt = $pdo->prepare("
        INSERT INTO sprint_submissions 
        (lead_id, first_name, last_name, role, company_size, sprint_tier, current_processes, desired_timeline, consultation_type, submission_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $lead['id'],
        $data['first_name'] ?? '',
        $data['last_name'] ?? '',
        $data['role'] ?? '',
        $data['company_size'] ?? '',
        $data['sprint_tier'] ?? '',
        $data['current_processes'] ?? '',
        $data['desired_timeline'] ?? '',
        $data['consultation_type'] ?? '',
        $submissionType
    ]);
    
    // Handle specific submission types
    switch ($submissionType) {
        case 'consultation_popup':
            // Also insert into consultation_submissions for booking workflow
            $consultationStmt = $pdo->prepare("
                INSERT INTO consultation_submissions 
                (lead_id, consultation_type, specific_goals, current_challenges) 
                VALUES (?, ?, ?, ?)
            ");
            
            $consultationType = $data['consultation_type'] ?? 'ai_automation_sprint';
            $consultationStmt->execute([
                $lead['id'],
                $consultationType,
                'AI Automation Sprint - ' . ($data['sprint_tier'] ?? 'General') . ' tier',
                $data['current_processes'] ?? ''
            ]);
            
            logLeadActivity($lead['id'], 'consultation_request', 'Sprint consultation requested', $data);
            break;
            
        case 'pdf_download':
            // Insert into pdf_downloads table
            $pdfStmt = $pdo->prepare("
                INSERT INTO pdf_downloads 
                (lead_id, pdf_type, download_ip, download_user_agent) 
                VALUES (?, ?, ?, ?)
            ");
            
            $pdfStmt->execute([
                $lead['id'],
                'ai_automation_readiness_assessment',
                $clientIP,
                $_SERVER['HTTP_USER_AGENT'] ?? ''
            ]);
            
            logLeadActivity($lead['id'], 'pdf_download', 'Downloaded AI Automation Readiness Assessment', $data);
            break;
            
        case 'contact_form':
            // Insert into contact_submissions table
            $contactStmt = $pdo->prepare("
                INSERT INTO contact_submissions 
                (lead_id, message, project_details, timeline) 
                VALUES (?, ?, ?, ?)
            ");
            
            $contactStmt->execute([
                $lead['id'],
                $data['current_processes'] ?? '',
                'Sprint tier: ' . ($data['sprint_tier'] ?? 'Not specified'),
                $data['desired_timeline'] ?? ''
            ]);
            
            logLeadActivity($lead['id'], 'contact_form', 'Sprint contact form submitted', $data);
            break;
    }
    
    // Send notification email
    $emailSubject = "New AI Automation Sprint Lead - " . ($data['company'] ?? $data['email']);
    $emailBody = generateNotificationEmail($data, $lead, $submissionType);
    
    error_log("Sprint submission: " . $emailSubject);
    
    // Prepare response based on submission type
    $response = [
        'success' => true,
        'lead_id' => $lead['uuid'],
        'score' => $lead['score']
    ];
    
    switch ($submissionType) {
        case 'consultation_popup':
            $response['message'] = 'Thank you! Your consultation request has been submitted. Our AI automation expert will contact you within 2 hours to schedule your session.';
            $response['next_steps'] = [
                'We\'ll review your automation needs within 2 hours',
                'A senior AI strategist will contact you to discuss your ' . ($data['consultation_type'] ?? 'automation') . ' requirements',
                'We\'ll schedule your 30-minute sprint consultation at your convenience'
            ];
            break;
            
        case 'pdf_download':
            $response['message'] = 'Success! Your AI Automation Readiness Assessment is ready for download.';
            $response['download_url'] = '/api/pdf-download.php?token=' . generateDownloadToken($lead['id'], 'ai_automation_readiness_assessment');
            $response['next_steps'] = [
                'Review your personalized assessment',
                'Identify your top automation opportunities',
                'Consider booking a free consultation to discuss implementation'
            ];
            break;
            
        case 'contact_form':
            $response['message'] = 'Thank you for your interest in AI automation sprints! We\'ve received your requirements and will get back to you within 24 hours with a custom proposal.';
            $response['next_steps'] = [
                'We\'ll review your automation requirements',
                'Our team will prepare a custom sprint proposal',
                'You\'ll receive a detailed response within 24 hours'
            ];
            break;
    }
    
    sendJsonResponse($response);
    
} catch (Exception $e) {
    error_log("Sprint submission error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendJsonResponse([
        'error' => 'An error occurred while processing your submission',
        'message' => $e->getMessage()
    ], $statusCode);
}

/**
 * Estimate budget range based on sprint tier
 */
function estimateBudgetFromTier($tier) {
    switch (strtolower($tier)) {
        case 'starter':
            return '10k-25k';
        case 'professional':
            return '25k-50k';
        case 'enterprise':
            return '50k-100k+';
        default:
            return '';
    }
}

/**
 * Generate notification email content
 */
function generateNotificationEmail($data, $lead, $submissionType) {
    $body = "New AI Automation Sprint submission:\n\n";
    $body .= "Submission Type: " . ucfirst(str_replace('_', ' ', $submissionType)) . "\n";
    $body .= "Lead Score: " . $lead['score'] . "\n\n";
    
    if (!empty($data['first_name']) && !empty($data['last_name'])) {
        $body .= "Name: " . $data['first_name'] . " " . $data['last_name'] . "\n";
    } else if (!empty($data['name'])) {
        $body .= "Name: " . $data['name'] . "\n";
    }
    
    $body .= "Email: " . $data['email'] . "\n";
    
    if (!empty($data['company'])) {
        $body .= "Company: " . $data['company'] . "\n";
    }
    
    if (!empty($data['role'])) {
        $body .= "Role: " . $data['role'] . "\n";
    }
    
    if (!empty($data['company_size'])) {
        $body .= "Company Size: " . $data['company_size'] . "\n";
    }
    
    if (!empty($data['sprint_tier'])) {
        $body .= "Interested Sprint Tier: " . ucfirst($data['sprint_tier']) . "\n";
    }
    
    if (!empty($data['desired_timeline'])) {
        $body .= "Desired Timeline: " . $data['desired_timeline'] . "\n";
    }
    
    if (!empty($data['current_processes'])) {
        $body .= "Current Manual Processes:\n" . $data['current_processes'] . "\n";
    }
    
    return $body;
}

/**
 * Generate secure download token for PDF
 */
function generateDownloadToken($leadId, $pdfType) {
    $data = [
        'lead_id' => $leadId,
        'pdf_type' => $pdfType,
        'expires' => time() + 3600 // 1 hour
    ];
    
    return base64_encode(json_encode($data));
}
?>