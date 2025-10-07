<?php
/**
 * PDF Download API Endpoint
 * 
 * Handles PDF download form submissions and serves PDF files
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once '../includes/functions.php';

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Handle form submission
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            throw new Exception('Invalid JSON input', 400);
        }
        
        // Sanitize input
        $data = sanitizeInput($input);
        
        // Validate required fields
        $requiredFields = ['name', 'email', 'company'];
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
        $rateLimitKey = 'pdf_download_' . $clientIP;
        $rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($rateLimitKey) . '.tmp';
        $currentTime = time();
        
        if (file_exists($rateLimitFile)) {
            $lastSubmissions = json_decode(file_get_contents($rateLimitFile), true) ?: [];
            $recentSubmissions = array_filter($lastSubmissions, function($timestamp) use ($currentTime) {
                return ($currentTime - $timestamp) < 1800; // 30 minutes
            });
            
            if (count($recentSubmissions) >= 10) {
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
            'industry' => $data['industry'] ?? '',
            'source' => 'pdf_download'
        ];
        
        // Create or update lead
        $lead = createOrUpdateLead($leadData);
        
        // Store PDF download record
        $pdo = getDbConnection();
        
        // Check if this lead has already downloaded this PDF
        $pdfType = $data['pdf_type'] ?? 'ai_guide';
        $stmt = $pdo->prepare("
            SELECT * FROM pdf_downloads 
            WHERE lead_id = ? AND pdf_type = ?
        ");
        $stmt->execute([$lead['id'], $pdfType]);
        $existingDownload = $stmt->fetch();
        
        if ($existingDownload) {
            // Update download count
            $stmt = $pdo->prepare("
                UPDATE pdf_downloads 
                SET download_count = download_count + 1, 
                    last_downloaded = CURRENT_TIMESTAMP,
                    download_ip = ?,
                    download_user_agent = ?
                WHERE id = ?
            ");
            $stmt->execute([
                $clientIP,
                $_SERVER['HTTP_USER_AGENT'] ?? '',
                $existingDownload['id']
            ]);
        } else {
            // Create new download record
            $stmt = $pdo->prepare("
                INSERT INTO pdf_downloads 
                (lead_id, pdf_type, download_ip, download_user_agent) 
                VALUES (?, ?, ?, ?)
            ");
            $stmt->execute([
                $lead['id'],
                $pdfType,
                $clientIP,
                $_SERVER['HTTP_USER_AGENT'] ?? ''
            ]);
        }
        
        // Log activity
        logLeadActivity($lead['id'], 'pdf_download', 'PDF downloaded: ' . $pdfType, $data);
        
        // Generate download token (valid for 5 minutes)
        $downloadToken = bin2hex(random_bytes(32));
        $tokenExpiry = time() + 300; // 5 minutes
        
        // Store token temporarily (in production, use Redis or database)
        $tokenFile = sys_get_temp_dir() . '/download_token_' . $downloadToken . '.tmp';
        file_put_contents($tokenFile, json_encode([
            'lead_id' => $lead['id'],
            'pdf_type' => $pdfType,
            'expires' => $tokenExpiry
        ]));
        
        // Send notification email
        $emailSubject = "New PDF Download - " . $data['company'];
        $emailBody = "New PDF download:\n\n";
        $emailBody .= "Name: " . $data['name'] . "\n";
        $emailBody .= "Email: " . $data['email'] . "\n";
        $emailBody .= "Company: " . $data['company'] . "\n";
        $emailBody .= "Industry: " . ($data['industry'] ?? 'Not specified') . "\n";
        $emailBody .= "PDF Type: " . $pdfType . "\n";
        $emailBody .= "Lead Score: " . $lead['score'] . "\n";
        
        error_log("PDF download: " . $emailSubject);
        
        sendJsonResponse([
            'success' => true,
            'message' => 'Thank you! Your download is ready.',
            'download_url' => '/backend/api/pdf-download.php?token=' . $downloadToken,
            'lead_id' => $lead['uuid'],
            'score' => $lead['score']
        ]);
        
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Handle PDF file download
        $token = $_GET['token'] ?? '';
        
        if (empty($token)) {
            throw new Exception('Invalid download token', 400);
        }
        
        $tokenFile = sys_get_temp_dir() . '/download_token_' . $token . '.tmp';
        
        if (!file_exists($tokenFile)) {
            throw new Exception('Invalid or expired download token', 404);
        }
        
        $tokenData = json_decode(file_get_contents($tokenFile), true);
        
        if (!$tokenData || $tokenData['expires'] < time()) {
            unlink($tokenFile);
            throw new Exception('Download token has expired', 410);
        }
        
        // Define PDF files
        $pdfFiles = [
            'ai_guide' => [
                'filename' => 'AI-Automation-Strategy-Guide.pdf',
                'path' => '../downloads/AI-Automation-Strategy-Guide.pdf',
                'title' => 'AI Automation Strategy Guide'
            ],
            'roi_calculator' => [
                'filename' => 'ROI-Calculator-Template.pdf',
                'path' => '../downloads/ROI-Calculator-Template.pdf',
                'title' => 'ROI Calculator Template'
            ],
            'case_studies' => [
                'filename' => 'AI-Success-Case-Studies.pdf',
                'path' => '../downloads/AI-Success-Case-Studies.pdf',
                'title' => 'AI Success Case Studies'
            ]
        ];
        
        $pdfType = $tokenData['pdf_type'];
        
        if (!isset($pdfFiles[$pdfType])) {
            throw new Exception('Invalid PDF type', 404);
        }
        
        $pdfFile = $pdfFiles[$pdfType];
        $filePath = $pdfFile['path'];
        
        // For demo purposes, create a placeholder PDF if it doesn't exist
        if (!file_exists($filePath)) {
            // Create directory if it doesn't exist
            $downloadDir = dirname($filePath);
            if (!is_dir($downloadDir)) {
                mkdir($downloadDir, 0755, true);
            }
            
            // Create a simple PDF placeholder
            $pdfContent = '%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
50 750 Td
(' . $pdfFile['title'] . ' - Coming Soon!) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000369 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
456
%%EOF';
            
            file_put_contents($filePath, $pdfContent);
        }
        
        // Clean up token
        unlink($tokenFile);
        
        // Log download activity
        logLeadActivity($tokenData['lead_id'], 'pdf_downloaded', 'PDF file downloaded: ' . $pdfType);
        
        // Serve the PDF file
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . $pdfFile['filename'] . '"');
        header('Content-Length: ' . filesize($filePath));
        header('Cache-Control: private, must-revalidate');
        
        readfile($filePath);
        exit;
        
    } else {
        throw new Exception('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("PDF download error: " . $e->getMessage());
    
    $statusCode = $e->getCode() ?: 500;
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // For GET requests, show HTML error page
        http_response_code($statusCode);
        echo "<h1>Download Error</h1><p>" . htmlspecialchars($e->getMessage()) . "</p>";
    } else {
        sendJsonResponse([
            'error' => 'An error occurred while processing your download request',
            'message' => $e->getMessage()
        ], $statusCode);
    }
}
?>