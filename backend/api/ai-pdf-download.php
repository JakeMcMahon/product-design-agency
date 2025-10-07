<?php
/**
 * AI Automation PDF Download API
 * 
 * Separate endpoint for ai.productquant.ru PDF downloads
 * Uses separate database and configuration
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://ai.productquant.ru');
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

require_once '../config/ai-automation-config.php';

/**
 * Sanitize input data
 */
function sanitizeAIPDFInput($data) {
    $sanitized = [];
    foreach ($data as $key => $value) {
        if (is_string($value)) {
            $sanitized[$key] = trim(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
        } else {
            $sanitized[$key] = $value;
        }
    }
    return $sanitized;
}

/**
 * Validate email format
 */
function validateAIPDFEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Send JSON response
 */
function sendAIPDFJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Track PDF download in AI automation database
 */
function trackAIPDFDownload($data) {
    $pdo = getAIDbConnection();
    
    // Check if lead exists
    $stmt = $pdo->prepare("SELECT id FROM ai_leads WHERE email = ?");
    $stmt->execute([$data['email']]);
    $existingLead = $stmt->fetch();
    
    $leadScore = calculateAILeadScore($data);
    
    if ($existingLead) {
        // Update existing lead
        $stmt = $pdo->prepare("
            UPDATE ai_leads SET 
                name = ?, company = ?, industry = ?, 
                score = ?, updated_at = NOW()
            WHERE email = ?
        ");
        $stmt->execute([
            $data['name'], $data['company'], $data['industry'],
            $leadScore, $data['email']
        ]);
        $leadId = $existingLead['id'];
    } else {
        // Create new lead
        $stmt = $pdo->prepare("
            INSERT INTO ai_leads 
            (name, email, company, industry, score, source, created_at)
            VALUES (?, ?, ?, ?, ?, 'pdf_download', NOW())
        ");
        $stmt->execute([
            $data['name'], $data['email'], $data['company'], 
            $data['industry'], $leadScore
        ]);
        $leadId = $pdo->lastInsertId();
    }
    
    // Track PDF download
    $stmt = $pdo->prepare("
        INSERT INTO ai_pdf_downloads 
        (lead_id, pdf_type, download_ip, user_agent, created_at)
        VALUES (?, 'ai_strategy_guide', ?, ?, NOW())
    ");
    
    $stmt->execute([
        $leadId,
        $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
    ]);
    
    return ['id' => $leadId, 'score' => $leadScore];
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON input', 400);
    }
    
    // Sanitize input
    $data = sanitizeAIPDFInput($input);
    
    // Validate required fields
    $requiredFields = ['name', 'email', 'company'];
    $errors = [];
    
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            $errors[] = "Поле '$field' обязательно";
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !validateAIPDFEmail($data['email'])) {
        $errors[] = 'Некорректный формат email';
    }
    
    if (!empty($errors)) {
        sendAIPDFJsonResponse(['error' => 'Ошибка валидации', 'details' => $errors], 400);
    }
    
    // Rate limiting
    $clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $rateLimitKey = 'ai_pdf_' . $clientIP;
    $rateLimitFile = sys_get_temp_dir() . '/ai_pdf_rate_limit_' . md5($rateLimitKey) . '.tmp';
    $currentTime = time();
    
    if (file_exists($rateLimitFile)) {
        $lastDownloads = json_decode(file_get_contents($rateLimitFile), true) ?: [];
        $recentDownloads = array_filter($lastDownloads, function($timestamp) use ($currentTime) {
            return ($currentTime - $timestamp) < 3600; // 1 hour
        });
        
        if (count($recentDownloads) >= 5) { // More lenient for PDF downloads
            sendAIPDFJsonResponse(['error' => 'Превышен лимит скачиваний. Попробуйте позже.'], 429);
        }
        
        $recentDownloads[] = $currentTime;
    } else {
        $recentDownloads = [$currentTime];
    }
    
    file_put_contents($rateLimitFile, json_encode($recentDownloads));
    
    // Track download and create/update lead
    $lead = trackAIPDFDownload($data);
    
    // Send notification email
    $emailSubject = "Скачивание ИИ-руководства - " . $data['company'];
    $emailBody = "Новое скачивание руководства по ИИ-стратегии:\n\n";
    $emailBody .= "Имя: " . $data['name'] . "\n";
    $emailBody .= "Email: " . $data['email'] . "\n";
    $emailBody .= "Компания: " . $data['company'] . "\n";
    $emailBody .= "Отрасль: " . ($data['industry'] ?? 'Не указана') . "\n";
    $emailBody .= "Рейтинг лида: " . $lead['score'] . "/30\n";
    
    sendAINotification($emailSubject, $emailBody, $data);
    
    sendAIPDFJsonResponse([
        'success' => true,
        'message' => 'Спасибо! Ваше руководство по ИИ-стратегии скачивается.',
        'download_url' => '/AI-Automation-Readiness-Assessment.pdf', // Matches actual file location
        'lead_score' => $lead['score']
    ]);
    
} catch (Exception $e) {
    error_log("AI PDF download error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendAIPDFJsonResponse([
        'error' => 'Произошла ошибка при скачивании руководства',
        'message' => $e->getMessage()
    ], $statusCode);
}
?>