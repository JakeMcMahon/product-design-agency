<?php
/**
 * AI Savings Calculator API Endpoint
 * 
 * Handles calculator form submissions and stores calculation results
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
    $requiredFields = ['name', 'email', 'company', 'industry', 'companySize', 'avgSalary', 'hoursPerWeek', 'processComplexity', 'automationLevel'];
    $errors = [];
    
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || $data[$field] === '') {
            $errors[] = "Field '$field' is required";
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !validateEmail($data['email'])) {
        $errors[] = 'Invalid email format';
    }
    
    // Validate numeric fields
    $numericFields = ['avgSalary', 'hoursPerWeek', 'automationLevel', 'currentErrorRate'];
    foreach ($numericFields as $field) {
        if (isset($data[$field]) && !is_numeric($data[$field])) {
            $errors[] = "Field '$field' must be a number";
        }
    }
    
    if (!empty($errors)) {
        sendJsonResponse(['error' => 'Validation failed', 'details' => $errors], 400);
    }
    
    // Rate limiting
    $clientIP = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $rateLimitKey = 'calculator_' . $clientIP;
    $rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($rateLimitKey) . '.tmp';
    $currentTime = time();
    
    if (file_exists($rateLimitFile)) {
        $lastSubmissions = json_decode(file_get_contents($rateLimitFile), true) ?: [];
        $recentSubmissions = array_filter($lastSubmissions, function($timestamp) use ($currentTime) {
            return ($currentTime - $timestamp) < 3600; // 1 hour
        });
        
        if (count($recentSubmissions) >= 10) {
            sendJsonResponse(['error' => 'Rate limit exceeded. Please try again later.'], 429);
        }
        
        $recentSubmissions[] = $currentTime;
    } else {
        $recentSubmissions = [$currentTime];
    }
    
    file_put_contents($rateLimitFile, json_encode($recentSubmissions));
    
    // Calculate savings (replicate frontend logic)
    $industryMultipliers = [
        'legal-services' => 1.3,
        'healthcare' => 1.1,
        'manufacturing' => 1.4,
        'financial-services' => 1.2,
        'real-estate' => 1.0,
        'ecommerce' => 1.1,
        'logistics' => 1.3,
        'technology' => 0.9,
        'education' => 1.0,
        'government' => 1.2,
        'other' => 1.0
    ];
    
    $companySizeEmployees = [
        'startup' => 25,
        'small' => 100,
        'medium' => 500,
        'large' => 2000,
        'enterprise' => 10000
    ];
    
    $industryMultiplier = $industryMultipliers[$data['industry']] ?? 1.0;
    $employeeCount = $companySizeEmployees[$data['companySize']] ?? 100;
    
    $avgSalary = floatval($data['avgSalary']);
    $hoursPerWeek = floatval($data['hoursPerWeek']);
    $automationLevel = floatval($data['automationLevel']) / 100;
    $currentErrorRate = floatval($data['currentErrorRate'] ?? 5) / 100;
    
    // Calculate time savings per employee
    $weeklyTimeSavedPerEmployee = $hoursPerWeek * $automationLevel * $industryMultiplier;
    $annualTimeSavedPerEmployee = $weeklyTimeSavedPerEmployee * 52;
    
    // Calculate total organizational savings
    $totalWeeklyTimeSaved = $weeklyTimeSavedPerEmployee * $employeeCount;
    $totalAnnualTimeSaved = $annualTimeSavedPerEmployee * $employeeCount;
    
    // Calculate cost savings
    $hourlyWage = $avgSalary / (52 * 40); // Assuming 40 hour work week
    $annualCostSavings = $totalAnnualTimeSaved * $hourlyWage;
    
    // Calculate error reduction savings
    $errorReductionRate = min($automationLevel * 0.8, 0.9); // Max 90% error reduction
    $errorCostSavings = $annualCostSavings * $currentErrorRate * $errorReductionRate;
    
    // Calculate FTE equivalent
    $fteEquivalent = $totalAnnualTimeSaved / (52 * 40);
    
    $calculationResults = [
        'weeklyTimeSaved' => round($totalWeeklyTimeSaved, 1),
        'annualTimeSaved' => round($totalAnnualTimeSaved, 0),
        'annualCostSavings' => round($annualCostSavings, 0),
        'errorReductionSavings' => round($errorCostSavings, 0),
        'totalSavings' => round($annualCostSavings + $errorCostSavings, 0),
        'fteEquivalent' => round($fteEquivalent, 1),
        'roi' => round((($annualCostSavings + $errorCostSavings) / 100000) * 100, 0), // Assuming 100k implementation cost
        'paybackPeriod' => round(100000 / (($annualCostSavings + $errorCostSavings) / 12), 1) // Months
    ];
    
    // Prepare lead data
    $leadData = [
        'email' => $data['email'],
        'name' => $data['name'],
        'company' => $data['company'],
        'phone' => $data['phone'] ?? '',
        'industry' => $data['industry'],
        'source' => 'calculator'
    ];
    
    // Create or update lead
    $lead = createOrUpdateLead($leadData);
    
    // Store calculator submission
    $pdo = getDbConnection();
    $stmt = $pdo->prepare("
        INSERT INTO calculator_submissions 
        (lead_id, company_size, employees_count, avg_salary, hours_per_week, process_complexity, 
         current_error_rate, automation_level, calculated_savings, roi_timeline, implementation_interest) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $lead['id'],
        $data['companySize'],
        $employeeCount,
        $avgSalary,
        $hoursPerWeek,
        $data['processComplexity'],
        $data['currentErrorRate'] ?? 5,
        $data['automationLevel'],
        json_encode($calculationResults),
        $data['roiTimeline'] ?? '',
        $data['implementationInterest'] ?? ''
    ]);
    
    // Log activity
    logLeadActivity($lead['id'], 'calculator_submission', 'Calculator form completed', array_merge($data, $calculationResults));
    
    // Send notification email
    $emailSubject = "New Calculator Submission - " . $data['company'] . " (Potential: $" . number_format($calculationResults['totalSavings']) . "/year)";
    $emailBody = "New calculator submission:\n\n";
    $emailBody .= "Name: " . $data['name'] . "\n";
    $emailBody .= "Email: " . $data['email'] . "\n";
    $emailBody .= "Company: " . $data['company'] . "\n";
    $emailBody .= "Industry: " . $data['industry'] . "\n";
    $emailBody .= "Company Size: " . $data['companySize'] . " (" . $employeeCount . " employees)\n";
    $emailBody .= "Annual Salary: $" . number_format($avgSalary) . "\n";
    $emailBody .= "Hours/Week: " . $hoursPerWeek . "\n";
    $emailBody .= "Automation Level: " . $data['automationLevel'] . "%\n\n";
    $emailBody .= "CALCULATED RESULTS:\n";
    $emailBody .= "Annual Time Saved: " . number_format($calculationResults['annualTimeSaved']) . " hours\n";
    $emailBody .= "Annual Cost Savings: $" . number_format($calculationResults['totalSavings']) . "\n";
    $emailBody .= "FTE Equivalent: " . $calculationResults['fteEquivalent'] . "\n";
    $emailBody .= "ROI: " . $calculationResults['roi'] . "%\n";
    $emailBody .= "Payback Period: " . $calculationResults['paybackPeriod'] . " months\n";
    $emailBody .= "Lead Score: " . $lead['score'] . "\n";
    
    error_log("Calculator submission: " . $emailSubject);
    
    sendJsonResponse([
        'success' => true,
        'message' => 'Thank you! Your savings calculation has been completed.',
        'results' => $calculationResults,
        'lead_id' => $lead['uuid'],
        'score' => $lead['score'],
        'recommendations' => [
            $calculationResults['totalSavings'] > 500000 ? 'High-value opportunity - Enterprise solution recommended' : 'Great automation potential identified',
            $calculationResults['paybackPeriod'] < 12 ? 'Fast ROI - Ideal for quick wins' : 'Strategic long-term investment',
            $calculationResults['fteEquivalent'] > 5 ? 'Significant workforce optimization opportunity' : 'Focused efficiency improvements possible'
        ]
    ]);
    
} catch (Exception $e) {
    error_log("Calculator submission error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    sendJsonResponse([
        'error' => 'An error occurred while processing your calculation',
        'message' => $e->getMessage()
    ], $statusCode);
}
?>