-- AI Automation Russia Database Schema
-- Separate database for ai.productquant.ru
-- This keeps the AI automation business completely separate from the main productquant.ru database

CREATE DATABASE IF NOT EXISTS ai_automation_ru CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ai_automation_ru;

-- Leads table for AI automation business
CREATE TABLE ai_leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    industry VARCHAR(100),
    budget VARCHAR(50),
    challenge VARCHAR(255),
    contact_preference VARCHAR(50),
    source VARCHAR(50) DEFAULT 'unknown',
    score INT DEFAULT 0,
    status ENUM('new', 'contacted', 'qualified', 'converted', 'lost') DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_company (company),
    INDEX idx_score (score DESC),
    INDEX idx_status (status),
    INDEX idx_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Consultation requests table
CREATE TABLE ai_consultations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT NOT NULL,
    consultation_type VARCHAR(100) DEFAULT 'ai_automation_strategy',
    preferred_date DATE,
    preferred_time VARCHAR(20),
    timezone VARCHAR(50) DEFAULT 'Europe/Moscow',
    message TEXT,
    status ENUM('pending', 'scheduled', 'completed', 'cancelled') DEFAULT 'pending',
    scheduled_at TIMESTAMP NULL,
    completed_at TIMESTAMP NULL,
    meeting_link VARCHAR(500),
    meeting_notes TEXT,
    followup_required BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (lead_id) REFERENCES ai_leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_status (status),
    INDEX idx_scheduled (scheduled_at),
    INDEX idx_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- PDF downloads tracking table
CREATE TABLE ai_pdf_downloads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT NOT NULL,
    pdf_type VARCHAR(100) DEFAULT 'ai_strategy_guide',
    download_ip VARCHAR(45),
    user_agent TEXT,
    referer VARCHAR(500),
    download_count INT DEFAULT 1,
    first_download_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_download_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (lead_id) REFERENCES ai_leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_pdf_type (pdf_type),
    INDEX idx_download_date (first_download_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Lead activities log
CREATE TABLE ai_lead_activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lead_id INT NOT NULL,
    activity_type VARCHAR(100) NOT NULL,
    activity_description TEXT,
    activity_data JSON,
    user_agent TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (lead_id) REFERENCES ai_leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_activity_type (activity_type),
    INDEX idx_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Email campaigns table
CREATE TABLE ai_email_campaigns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    target_audience JSON, -- Criteria for targeting leads
    status ENUM('draft', 'scheduled', 'sent', 'paused') DEFAULT 'draft',
    scheduled_at TIMESTAMP NULL,
    sent_at TIMESTAMP NULL,
    total_recipients INT DEFAULT 0,
    total_opened INT DEFAULT 0,
    total_clicked INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_status (status),
    INDEX idx_scheduled (scheduled_at),
    INDEX idx_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Email tracking table
CREATE TABLE ai_email_tracking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campaign_id INT NOT NULL,
    lead_id INT NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    opened_at TIMESTAMP NULL,
    clicked_at TIMESTAMP NULL,
    unsubscribed_at TIMESTAMP NULL,
    bounced BOOLEAN DEFAULT FALSE,
    bounce_reason TEXT,
    
    FOREIGN KEY (campaign_id) REFERENCES ai_email_campaigns(id) ON DELETE CASCADE,
    FOREIGN KEY (lead_id) REFERENCES ai_leads(id) ON DELETE CASCADE,
    INDEX idx_campaign_id (campaign_id),
    INDEX idx_lead_id (lead_id),
    INDEX idx_sent (sent_at DESC),
    UNIQUE KEY unique_campaign_lead (campaign_id, lead_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- System settings table
CREATE TABLE ai_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type VARCHAR(50) DEFAULT 'string',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default settings
INSERT INTO ai_settings (setting_key, setting_value, setting_type, description) VALUES
('site_title', 'AI Automation Russia', 'string', 'Site title for ai.productquant.ru'),
('contact_email', 'hello@productquant.ru', 'string', 'Main contact email for AI automation business'),
('phone_number', '+7 (925) 211-28-02', 'string', 'Main phone number for AI automation business'),
('business_hours', '{"start": "09:00", "end": "18:00", "timezone": "Europe/Moscow"}', 'json', 'Business hours in Moscow timezone'),
('lead_score_threshold', '15', 'integer', 'Minimum score for high-priority leads'),
('auto_followup_delay', '24', 'integer', 'Hours to wait before sending follow-up email'),
('pdf_guide_url', '/AI-Automation-Readiness-Assessment.pdf', 'string', 'URL for the Russian AI strategy guide PDF');

-- Create indexes for better performance
CREATE INDEX idx_leads_score_status ON ai_leads(score DESC, status);
CREATE INDEX idx_consultations_date_status ON ai_consultations(preferred_date, status);
CREATE INDEX idx_activities_lead_date ON ai_lead_activities(lead_id, created_at DESC);

-- Create a user for the AI automation database
-- Note: Run these commands separately with appropriate privileges
-- CREATE USER 'ai_user'@'localhost' IDENTIFIED BY 'your_secure_password_here';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ai_automation_ru.* TO 'ai_user'@'localhost';
-- FLUSH PRIVILEGES;