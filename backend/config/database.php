<?php
/**
 * Database configuration for Auto Genie Hub
 * 
 * This file contains database connection settings and PDO configuration
 */

// Database configuration - Update these with your actual database credentials
define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
define('DB_NAME', $_ENV['DB_NAME'] ?? 'auto_genie_hub');
define('DB_USER', $_ENV['DB_USER'] ?? 'root');
define('DB_PASS', $_ENV['DB_PASS'] ?? '');
define('DB_CHARSET', 'utf8mb4');

// PDO options for better security and performance
$pdoOptions = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . DB_CHARSET,
    PDO::ATTR_PERSISTENT => false, // Set to true for persistent connections if needed
];

/**
 * Create and return a PDO database connection
 * 
 * @return PDO Database connection
 * @throws Exception If connection fails
 */
function getDbConnection() {
    static $pdo = null;
    
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $GLOBALS['pdoOptions']);
        } catch (PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            throw new Exception("Database connection failed", 500);
        }
    }
    
    return $pdo;
}

/**
 * Test database connection
 * 
 * @return bool True if connection successful
 */
function testDbConnection() {
    try {
        $pdo = getDbConnection();
        $pdo->query("SELECT 1");
        return true;
    } catch (Exception $e) {
        error_log("Database connection test failed: " . $e->getMessage());
        return false;
    }
}
?>