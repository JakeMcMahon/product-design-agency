<?php
/**
 * Main configuration file for Auto Genie Hub backend
 */

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

// Timezone
date_default_timezone_set('UTC');

// Load environment variables from .env if it exists
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Dynamic domain detection
function getCurrentDomain() {
    if (isset($_ENV['DOMAIN'])) {
        return $_ENV['DOMAIN'];
    }
    
    // Try to get domain from HTTP headers
    if (isset($_SERVER['HTTP_HOST'])) {
        return $_SERVER['HTTP_HOST'];
    }
    
    // Fallback for CLI/cron jobs
    if (isset($_SERVER['SERVER_NAME'])) {
        return $_SERVER['SERVER_NAME'];
    }
    
    // Final fallback
    return 'localhost';
}

$currentDomain = getCurrentDomain();
$isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || 
           (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') ||
           (!empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] === 'on');
$protocol = $isHttps ? 'https://' : 'http://';

// Site configuration - dynamically determined
define('SITE_URL', $_ENV['SITE_URL'] ?? $protocol . $currentDomain);
define('API_URL', $_ENV['API_URL'] ?? $protocol . $currentDomain . '/api');

// Email configuration - use current domain
define('NOTIFICATION_EMAIL', $_ENV['NOTIFICATION_EMAIL'] ?? 'admin@' . $currentDomain);
define('FROM_EMAIL', $_ENV['FROM_EMAIL'] ?? 'noreply@' . $currentDomain);

// Security settings
define('JWT_SECRET', $_ENV['JWT_SECRET'] ?? 'your-jwt-secret-change-in-production');
define('RATE_LIMIT_ENABLED', $_ENV['RATE_LIMIT_ENABLED'] ?? true);

// File upload settings
define('UPLOAD_MAX_SIZE', 10 * 1024 * 1024); // 10MB
define('ALLOWED_FILE_TYPES', ['pdf', 'doc', 'docx']);

// Helper function to get current domain (accessible globally)
function getDomainName() {
    return getCurrentDomain();
}

// Include database configuration
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/includes/functions.php';
?>