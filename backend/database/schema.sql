-- Auto Genie Hub Database Schema
-- This script creates all necessary tables for form submissions and lead management

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS auto_genie_hub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE auto_genie_hub;

-- Create leads table (main table for all lead information)
CREATE TABLE leads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uuid VARCHAR(36) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    industry VARCHAR(100),
    challenge VARCHAR(100),
    budget VARCHAR(100),
    contact_preference VARCHAR(50),
    source VARCHAR(50) NOT NULL, -- 'contact_form', 'consultation', 'pdf_download', 'calculator'
    status VARCHAR(50) DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'converted', 'lost'
    score INT DEFAULT 0, -- Lead scoring 0-100
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_source (source),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
) ENGINE=InnoDB;

-- Contact form submissions
CREATE TABLE contact_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    message TEXT,
    project_details TEXT,
    urgency VARCHAR(50),
    current_pain_points JSON, -- Store as JSON for flexibility
    desired_outcomes JSON,
    timeline VARCHAR(100),
    decision_makers JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id)
) ENGINE=InnoDB;

-- Consultation booking submissions
CREATE TABLE consultation_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    preferred_date DATE,
    preferred_time VARCHAR(20),
    timezone VARCHAR(50),
    consultation_type VARCHAR(100), -- 'strategy', 'technical', 'demo'
    specific_goals TEXT,
    current_challenges TEXT,
    meeting_attendees JSON,
    consultation_status VARCHAR(50) DEFAULT 'requested', -- 'requested', 'scheduled', 'completed', 'cancelled'
    scheduled_datetime DATETIME,
    consultant_assigned VARCHAR(255),
    meeting_link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_status (consultation_status)
) ENGINE=InnoDB;

-- PDF download submissions (lead magnets)
CREATE TABLE pdf_downloads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    pdf_type VARCHAR(100) NOT NULL, -- 'ai_guide', 'roi_calculator', 'case_studies'
    download_ip VARCHAR(45),
    download_user_agent TEXT,
    download_count INT DEFAULT 1,
    last_downloaded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_pdf_type (pdf_type)
) ENGINE=InnoDB;

-- AI Savings Calculator submissions
CREATE TABLE calculator_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    company_size VARCHAR(50),
    employees_count INT,
    avg_salary DECIMAL(10,2),
    hours_per_week DECIMAL(5,2),
    process_complexity VARCHAR(50),
    current_error_rate DECIMAL(5,2),
    automation_level DECIMAL(5,2),
    calculated_savings JSON, -- Store all calculation results
    roi_timeline VARCHAR(50),
    implementation_interest VARCHAR(50), -- 'immediate', '3_months', '6_months', '1_year', 'exploring'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_company_size (company_size)
) ENGINE=InnoDB;

-- AI Automation Sprint submissions (specific to sprint landing page)
CREATE TABLE sprint_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(100),
    company_size VARCHAR(50), -- '1-10', '11-50', '51-200', etc.
    sprint_tier VARCHAR(50), -- 'starter', 'professional', 'enterprise', 'not-sure'
    current_processes TEXT, -- Description of manual processes to automate
    desired_timeline VARCHAR(50), -- 'asap', '1-month', '2-3-months', 'planning'
    consultation_type VARCHAR(50), -- 'starter', 'professional', 'enterprise'
    submission_type VARCHAR(50) NOT NULL, -- 'contact_form', 'consultation_popup', 'pdf_download'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_sprint_tier (sprint_tier),
    INDEX idx_submission_type (submission_type)
) ENGINE=InnoDB;

-- Email subscriptions and preferences
CREATE TABLE email_subscriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    subscribed BOOLEAN DEFAULT TRUE,
    subscription_source VARCHAR(100), -- 'form_signup', 'pdf_download', 'consultation'
    preferences JSON, -- Email preferences (newsletters, updates, etc.)
    double_opt_in BOOLEAN DEFAULT FALSE,
    double_opt_in_token VARCHAR(100),
    double_opt_in_expires TIMESTAMP,
    unsubscribed_at TIMESTAMP NULL,
    unsubscribe_reason VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_subscribed (subscribed)
) ENGINE=InnoDB;

-- Lead activities/interactions tracking
CREATE TABLE lead_activities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    activity_type VARCHAR(100) NOT NULL, -- 'form_submit', 'email_open', 'link_click', 'page_view', 'consultation', 'download'
    activity_description TEXT,
    activity_data JSON, -- Additional data specific to activity type
    ip_address VARCHAR(45),
    user_agent TEXT,
    referrer VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id),
    INDEX idx_activity_type (activity_type),
    INDEX idx_created (created_at)
) ENGINE=InnoDB;

-- Lead scoring rules (for automatic scoring)
CREATE TABLE lead_scoring_rules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rule_name VARCHAR(255) NOT NULL,
    condition_field VARCHAR(100) NOT NULL,
    condition_operator VARCHAR(20) NOT NULL, -- 'equals', 'contains', 'greater_than', etc.
    condition_value VARCHAR(255) NOT NULL,
    points INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_active (is_active)
) ENGINE=InnoDB;

-- Admin users for backend access
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin', -- 'admin', 'manager', 'viewer'
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_active (is_active)
) ENGINE=InnoDB;

-- Form configuration (for dynamic form fields)
CREATE TABLE form_configs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    form_type VARCHAR(100) NOT NULL, -- 'contact', 'consultation', 'pdf_download', 'calculator'
    field_name VARCHAR(100) NOT NULL,
    field_type VARCHAR(50) NOT NULL, -- 'text', 'email', 'select', 'textarea', 'number'
    field_options JSON, -- For select fields, store options
    is_required BOOLEAN DEFAULT FALSE,
    validation_rules JSON,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_form_type (form_type),
    INDEX idx_active (is_active)
) ENGINE=InnoDB;

-- Insert default lead scoring rules
INSERT INTO lead_scoring_rules (rule_name, condition_field, condition_operator, condition_value, points) VALUES
('Enterprise Budget', 'budget', 'contains', '100k', 25),
('High Budget Range', 'budget', 'contains', '50k', 20),
('Medium Budget Range', 'budget', 'contains', '25k', 15),
('Fortune Industry', 'industry', 'equals', 'financial-services', 20),
('High Value Industry', 'industry', 'equals', 'legal-services', 18),
('Manufacturing Industry', 'industry', 'equals', 'manufacturing', 15),
('Phone Provided', 'phone', 'not_empty', '', 10),
('Company Provided', 'company', 'not_empty', '', 8),
('Video Call Preference', 'contact_preference', 'equals', 'video', 12),
('Phone Call Preference', 'contact_preference', 'equals', 'phone', 10),
('PDF Download', 'source', 'equals', 'pdf_download', 5),
('Calculator Usage', 'source', 'equals', 'calculator', 8),
('Consultation Request', 'source', 'equals', 'consultation', 15);

-- Insert default admin user (password: admin123 - should be changed!)
-- Note: Update this email to match your actual domain after deployment
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@YOURDOMAIN.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Create views for reporting
CREATE VIEW lead_summary AS
SELECT 
    l.id,
    l.uuid,
    l.name,
    l.email,
    l.company,
    l.industry,
    l.source,
    l.status,
    l.score,
    l.created_at,
    COUNT(la.id) as activity_count,
    MAX(la.created_at) as last_activity
FROM leads l
LEFT JOIN lead_activities la ON l.id = la.lead_id
GROUP BY l.id;

CREATE VIEW daily_lead_stats AS
SELECT 
    DATE(created_at) as date,
    source,
    COUNT(*) as lead_count,
    AVG(score) as avg_score
FROM leads 
GROUP BY DATE(created_at), source
ORDER BY date DESC;