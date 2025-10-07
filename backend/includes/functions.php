<?php
/**
 * Common functions for Auto Genie Hub backend
 * 
 * This file contains utility functions used across the application
 */

require_once __DIR__ . '/../config/database.php';

/**
 * Generate a UUID v4
 * 
 * @return string UUID v4
 */
function generateUUID() {
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

/**
 * Sanitize input data
 * 
 * @param mixed $data Input data to sanitize
 * @return mixed Sanitized data
 */
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    
    return $data;
}

/**
 * Validate email address
 * 
 * @param string $email Email to validate
 * @return bool True if valid email
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Send JSON response
 * 
 * @param array $data Response data
 * @param int $httpCode HTTP status code
 * @param array $headers Additional headers
 */
function sendJsonResponse($data, $httpCode = 200, $headers = []) {
    http_response_code($httpCode);
    
    // Set default headers
    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Origin: *'); // Update this for production
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    
    // Set additional headers
    foreach ($headers as $header => $value) {
        header("$header: $value");
    }
    
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

/**
 * Log activity for a lead
 * 
 * @param int $leadId Lead ID
 * @param string $activityType Type of activity
 * @param string $description Activity description
 * @param array $data Additional activity data
 * @return bool Success status
 */
function logLeadActivity($leadId, $activityType, $description = '', $data = []) {
    try {
        $pdo = getDbConnection();
        
        $stmt = $pdo->prepare("
            INSERT INTO lead_activities 
            (lead_id, activity_type, activity_description, activity_data, ip_address, user_agent, referrer) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ");
        
        return $stmt->execute([
            $leadId,
            $activityType,
            $description,
            json_encode($data),
            $_SERVER['REMOTE_ADDR'] ?? '',
            $_SERVER['HTTP_USER_AGENT'] ?? '',
            $_SERVER['HTTP_REFERER'] ?? ''
        ]);
    } catch (Exception $e) {
        error_log("Failed to log lead activity: " . $e->getMessage());
        return false;
    }
}

/**
 * Calculate lead score based on rules
 * 
 * @param array $leadData Lead data
 * @return int Calculated score
 */
function calculateLeadScore($leadData) {
    try {
        $pdo = getDbConnection();
        $stmt = $pdo->prepare("SELECT * FROM lead_scoring_rules WHERE is_active = 1");
        $stmt->execute();
        $rules = $stmt->fetchAll();
        
        $totalScore = 0;
        
        foreach ($rules as $rule) {
            $fieldValue = $leadData[$rule['condition_field']] ?? '';
            $conditionMet = false;
            
            switch ($rule['condition_operator']) {
                case 'equals':
                    $conditionMet = ($fieldValue === $rule['condition_value']);
                    break;
                case 'contains':
                    $conditionMet = (strpos(strtolower($fieldValue), strtolower($rule['condition_value'])) !== false);
                    break;
                case 'not_empty':
                    $conditionMet = !empty($fieldValue);
                    break;
                case 'greater_than':
                    $conditionMet = (is_numeric($fieldValue) && floatval($fieldValue) > floatval($rule['condition_value']));
                    break;
            }
            
            if ($conditionMet) {
                $totalScore += $rule['points'];
            }
        }
        
        return min($totalScore, 100); // Cap at 100
    } catch (Exception $e) {
        error_log("Failed to calculate lead score: " . $e->getMessage());
        return 0;
    }
}

/**
 * Create or update lead record
 * 
 * @param array $leadData Lead data
 * @return array Lead record with ID
 */
function createOrUpdateLead($leadData) {
    try {
        $pdo = getDbConnection();
        
        // Check if lead exists by email
        $stmt = $pdo->prepare("SELECT * FROM leads WHERE email = ?");
        $stmt->execute([$leadData['email']]);
        $existingLead = $stmt->fetch();
        
        if ($existingLead) {
            // Update existing lead
            $stmt = $pdo->prepare("
                UPDATE leads SET 
                    name = ?, company = ?, phone = ?, industry = ?, 
                    challenge = ?, budget = ?, contact_preference = ?,
                    score = ?, updated_at = CURRENT_TIMESTAMP
                WHERE email = ?
            ");
            
            $stmt->execute([
                $leadData['name'] ?? $existingLead['name'],
                $leadData['company'] ?? $existingLead['company'],
                $leadData['phone'] ?? $existingLead['phone'],
                $leadData['industry'] ?? $existingLead['industry'],
                $leadData['challenge'] ?? $existingLead['challenge'],
                $leadData['budget'] ?? $existingLead['budget'],
                $leadData['contact_preference'] ?? $existingLead['contact_preference'],
                calculateLeadScore(array_merge($existingLead, $leadData)),
                $leadData['email']
            ]);
            
            return array_merge($existingLead, $leadData);
        } else {
            // Create new lead
            $uuid = generateUUID();
            $score = calculateLeadScore($leadData);
            
            $stmt = $pdo->prepare("
                INSERT INTO leads 
                (uuid, email, name, company, phone, industry, challenge, budget, contact_preference, source, score)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");
            
            $stmt->execute([
                $uuid,
                $leadData['email'],
                $leadData['name'] ?? '',
                $leadData['company'] ?? '',
                $leadData['phone'] ?? '',
                $leadData['industry'] ?? '',
                $leadData['challenge'] ?? '',
                $leadData['budget'] ?? '',
                $leadData['contact_preference'] ?? '',
                $leadData['source'] ?? 'unknown',
                $score
            ]);
            
            $leadId = $pdo->lastInsertId();
            
            return [
                'id' => $leadId,
                'uuid' => $uuid,
                'email' => $leadData['email'],
                'name' => $leadData['name'] ?? '',
                'company' => $leadData['company'] ?? '',
                'phone' => $leadData['phone'] ?? '',
                'industry' => $leadData['industry'] ?? '',
                'challenge' => $leadData['challenge'] ?? '',
                'budget' => $leadData['budget'] ?? '',
                'contact_preference' => $leadData['contact_preference'] ?? '',
                'source' => $leadData['source'] ?? 'unknown',
                'score' => $score
            ];
        }
    } catch (Exception $e) {
        error_log("Failed to create/update lead: " . $e->getMessage());
        throw new Exception("Failed to process lead data", 500);
    }
}
?>