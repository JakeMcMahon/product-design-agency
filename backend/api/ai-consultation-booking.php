<?php
/**
 * AI Automation Consultation Booking API
 * 
 * Separate endpoint for ai.productquant.ru consultation bookings
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
function sanitizeAIInput($data) {
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
function validateAIEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Send JSON response
 */
function sendAIJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Create or update lead in AI automation database
 */
function createAILead($data) {
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
                name = ?, company = ?, phone = ?, industry = ?, 
                budget = ?, challenge = ?, contact_preference = ?,
                score = ?, updated_at = NOW()
            WHERE email = ?
        ");
        $stmt->execute([
            $data['name'], $data['company'], $data['phone'], $data['industry'],
            $data['budget'], $data['challenge'], $data['contact_preference'],
            $leadScore, $data['email']
        ]);
        $leadId = $existingLead['id'];
    } else {
        // Create new lead
        $stmt = $pdo->prepare("
            INSERT INTO ai_leads 
            (name, email, company, phone, industry, budget, challenge, contact_preference, score, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
        ");
        $stmt->execute([
            $data['name'], $data['email'], $data['company'], $data['phone'], 
            $data['industry'], $data['budget'], $data['challenge'], 
            $data['contact_preference'], $leadScore
        ]);
        $leadId = $pdo->lastInsertId();
    }
    
    return ['id' => $leadId, 'score' => $leadScore];
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON input', 400);
    }
    
    // Sanitize input
    $data = sanitizeAIInput($input);
    
    // Validate required fields
    $requiredFields = ['name', 'email', 'company', 'industry', 'challenge'];
    $errors = [];
    
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            $errors[] = "Поле '$field' обязательно";
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !validateAIEmail($data['email'])) {
        $errors[] = 'Некорректный формат email';
    }
    
    if (!empty($errors)) {
        sendAIJsonResponse(['error' => 'Ошибка валидации', 'details' => $errors], 400);
    }
    
    // Rate limiting
    $clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $rateLimitKey = 'ai_consultation_' . $clientIP;
    $rateLimitFile = sys_get_temp_dir() . '/ai_rate_limit_' . md5($rateLimitKey) . '.tmp';
    $currentTime = time();
    
    if (file_exists($rateLimitFile)) {
        $lastSubmissions = json_decode(file_get_contents($rateLimitFile), true) ?: [];
        $recentSubmissions = array_filter($lastSubmissions, function($timestamp) use ($currentTime) {
            return ($currentTime - $timestamp) < 3600; // 1 hour
        });
        
        if (count($recentSubmissions) >= AI_RATE_LIMIT_HOURLY) {
            sendAIJsonResponse(['error' => 'Превышен лимит запросов. Попробуйте позже.'], 429);
        }
        
        $recentSubmissions[] = $currentTime;
    } else {
        $recentSubmissions = [$currentTime];
    }
    
    file_put_contents($rateLimitFile, json_encode($recentSubmissions));
    
    // Create lead
    $lead = createAILead($data);
    
    // Store consultation specific data
    $pdo = getAIDbConnection();
    $stmt = $pdo->prepare("
        INSERT INTO ai_consultations 
        (lead_id, message, consultation_type, status, created_at) 
        VALUES (?, ?, ?, 'pending', NOW())
    ");
    
    $stmt->execute([
        $lead['id'],
        $data['message'] ?? '',
        $data['consultation_type'] ?? 'ai_automation_strategy'
    ]);
    
    // Send notification email
    $emailSubject = "Новая заявка на ИИ-консультацию - " . $data['company'];
    $emailBody = "Новая заявка на консультацию по ИИ-автоматизации:\n\n";
    $emailBody .= "Имя: " . $data['name'] . "\n";
    $emailBody .= "Email: " . $data['email'] . "\n";
    $emailBody .= "Компания: " . $data['company'] . "\n";
    $emailBody .= "Отрасль: " . $data['industry'] . "\n";
    $emailBody .= "Главный вызов: " . $data['challenge'] . "\n";
    $emailBody .= "Бюджет: " . ($data['budget'] ?? 'Не указан') . "\n";
    $emailBody .= "Способ связи: " . ($data['contactPreference'] ?? 'Не указан') . "\n";
    $emailBody .= "Рейтинг лида: " . $lead['score'] . "/30\n";
    
    if (!empty($data['message'])) {
        $emailBody .= "\nСообщение:\n" . $data['message'] . "\n";
    }
    
    sendAINotification($emailSubject, $emailBody, $data);
    
    sendAIJsonResponse([
        'success' => true,
        'message' => 'Спасибо! Ваша заявка на консультацию отправлена. Наша команда свяжется с вами в течение 2 часов для планирования встречи.',
        'lead_score' => $lead['score'],
        'next_steps' => [
            'Мы рассмотрим вашу информацию в течение 2 часов',
            'Старший ИИ-стратег свяжется с вами в течение 24 часов',
            'Мы запланируем вашу 30-минутную консультацию в удобное для вас время'
        ]
    ]);
    
} catch (Exception $e) {
    error_log("AI Consultation booking error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendAIJsonResponse([
        'error' => 'Произошла ошибка при обработке заявки на консультацию',
        'message' => $e->getMessage()
    ], $statusCode);
}
?>