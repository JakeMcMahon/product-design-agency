<?php
/**
 * AI Automation Business Configuration
 * 
 * Separate database and configuration for ai.productquant.ru
 * This keeps the AI automation business completely separate from productquant.ru
 */

// Database configuration for AI automation business
define('AI_DB_HOST', 'localhost');
define('AI_DB_NAME', 'ai_automation_ru');  // Separate database
define('AI_DB_USER', 'ai_user');           // Separate user
define('AI_DB_PASS', 'your_secure_password_here');  // Update with actual password

// Email configuration for AI automation business
define('AI_NOTIFICATION_EMAIL', 'notifications@productquant.ru');
define('AI_FROM_EMAIL', 'noreply@productquant.ru');
define('AI_FROM_NAME', 'AI Automation Russia');

// Business settings
define('AI_BUSINESS_NAME', 'AI Automation Russia');
define('AI_DOMAIN', 'ai.productquant.ru');
define('AI_CURRENCY', 'RUB');
define('AI_TIMEZONE', 'Europe/Moscow');

// Rate limiting settings
define('AI_RATE_LIMIT_HOURLY', 3);
define('AI_RATE_LIMIT_DAILY', 10);

// Lead scoring settings for Russian market
$AI_LEAD_SCORING = [
    'industry_weights' => [
        'manufacturing' => 10,
        'financial-services' => 9,
        'healthcare' => 8,
        'technology' => 7,
        'logistics' => 7,
        'government' => 6,
        'other' => 5
    ],
    'budget_weights' => [
        '8m-plus' => 10,
        '4m-8m' => 8,
        '2m-4m' => 6,
        '800k-2m' => 4,
        'under-800k' => 2,
        'custom' => 9
    ],
    'challenge_weights' => [
        'document-automation' => 9,
        'process-optimization' => 8,
        'data-analysis' => 7,
        'custom-ai' => 10,
        'other' => 5
    ]
];

// Russian market specific settings
$AI_RUSSIAN_SETTINGS = [
    'business_hours' => [
        'start' => '09:00',
        'end' => '18:00',
        'timezone' => 'Europe/Moscow'
    ],
    'currency_symbol' => '₽',
    'phone_format' => '+7 (XXX) XXX-XX-XX',
    'default_language' => 'ru'
];

/**
 * Get database connection for AI automation business
 */
function getAIDbConnection() {
    static $pdo = null;
    
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . AI_DB_HOST . ";dbname=" . AI_DB_NAME . ";charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
            ];
            
            $pdo = new PDO($dsn, AI_DB_USER, AI_DB_PASS, $options);
        } catch (PDOException $e) {
            error_log("AI Database connection failed: " . $e->getMessage());
            throw new Exception("Database connection failed", 500);
        }
    }
    
    return $pdo;
}

/**
 * Send notification email for AI automation business
 */
function sendAINotification($subject, $body, $leadData = []) {
    $headers = [
        'From: ' . AI_FROM_NAME . ' <' . AI_FROM_EMAIL . '>',
        'Reply-To: ' . AI_FROM_EMAIL,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Business: AI-Automation-RU',
        'X-Domain: ' . AI_DOMAIN
    ];
    
    $fullSubject = '[' . AI_BUSINESS_NAME . '] ' . $subject;
    $fullBody = $body;
    
    if (!empty($leadData)) {
        $fullBody .= "\n\n--- Lead Information ---\n";
        foreach ($leadData as $key => $value) {
            $fullBody .= ucfirst($key) . ": " . $value . "\n";
        }
    }
    
    $fullBody .= "\n\n--- System Information ---\n";
    $fullBody .= "Domain: " . AI_DOMAIN . "\n";
    $fullBody .= "Time: " . date('Y-m-d H:i:s T') . "\n";
    $fullBody .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
    
    // Log the notification
    error_log("AI Automation Notification: " . $fullSubject);
    
    // Send email (implement actual email sending here)
    return mail(AI_NOTIFICATION_EMAIL, $fullSubject, $fullBody, implode("\r\n", $headers));
}

/**
 * Calculate lead score for Russian market
 */
function calculateAILeadScore($data) {
    global $AI_LEAD_SCORING;
    
    $score = 0;
    
    // Industry scoring
    $industry = $data['industry'] ?? '';
    $score += $AI_LEAD_SCORING['industry_weights'][$industry] ?? 5;
    
    // Budget scoring
    $budget = $data['budget'] ?? '';
    $score += $AI_LEAD_SCORING['budget_weights'][$budget] ?? 2;
    
    // Challenge scoring
    $challenge = $data['challenge'] ?? '';
    $score += $AI_LEAD_SCORING['challenge_weights'][$challenge] ?? 5;
    
    // Company size bonus (if company name suggests enterprise)
    $company = strtolower($data['company'] ?? '');
    if (strpos($company, 'ooo') !== false || strpos($company, 'ооо') !== false) {
        $score += 2; // LLC bonus
    }
    if (strpos($company, 'pao') !== false || strpos($company, 'пао') !== false) {
        $score += 5; // Public company bonus
    }
    
    // Contact preference bonus
    if (($data['contactPreference'] ?? '') === 'phone') {
        $score += 2; // Phone contact preferred
    }
    
    return min($score, 30); // Cap at 30
}

?>