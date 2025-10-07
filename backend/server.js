const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Data storage directory
const DATA_DIR = path.join(__dirname, 'data');

// Ensure data directory exists
async function ensureDataDir() {
    try {
        await fs.access(DATA_DIR);
    } catch {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
}

// Utility function to generate UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Contact form endpoint
app.post('/api/contact-form.php', async (req, res) => {
    try {
        const formData = req.body;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'company', 'industry', 'challenge', 'message'];
        const errors = [];
        
        for (const field of requiredFields) {
            if (!formData[field] || !formData[field].trim()) {
                errors.push(`Field '${field}' is required`);
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push('Invalid email format');
        }
        
        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }
        
        // Create submission record
        const submission = {
            id: generateUUID(),
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'contact_form'
        };
        
        // Save to file
        const filename = `contact_${Date.now()}_${submission.id.substring(0, 8)}.json`;
        const filepath = path.join(DATA_DIR, filename);
        await fs.writeFile(filepath, JSON.stringify(submission, null, 2));
        
        console.log(`Contact form submission saved: ${filename}`);
        console.log(`From: ${formData.name} (${formData.email}) - ${formData.company}`);
        
        res.json({
            success: true,
            message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
            lead_id: submission.id
        });
        
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while processing your request',
            message: error.message
        });
    }
});

// Consultation booking endpoint
app.post('/api/consultation-booking.php', async (req, res) => {
    try {
        const formData = req.body;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'company', 'industry', 'challenge'];
        const errors = [];
        
        for (const field of requiredFields) {
            if (!formData[field] || !formData[field].trim()) {
                errors.push(`Field '${field}' is required`);
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push('Invalid email format');
        }
        
        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }
        
        // Create consultation record
        const consultation = {
            id: generateUUID(),
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'consultation_popup',
            status: 'requested'
        };
        
        // Save to file
        const filename = `consultation_${Date.now()}_${consultation.id.substring(0, 8)}.json`;
        const filepath = path.join(DATA_DIR, filename);
        await fs.writeFile(filepath, JSON.stringify(consultation, null, 2));
        
        console.log(`Consultation booking saved: ${filename}`);
        console.log(`From: ${formData.name} (${formData.email}) - ${formData.company}`);
        
        res.json({
            success: true,
            message: 'Consultation request submitted successfully',
            lead_id: consultation.id
        });
        
    } catch (error) {
        console.error('Consultation booking error:', error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while processing your request',
            message: error.message
        });
    }
});

// PDF download endpoint  
app.post('/api/pdf-download.php', async (req, res) => {
    try {
        const formData = req.body;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'company'];
        const errors = [];
        
        for (const field of requiredFields) {
            if (!formData[field] || !formData[field].trim()) {
                errors.push(`Field '${field}' is required`);
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.push('Invalid email format');
        }
        
        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }
        
        // Create PDF download record
        const download = {
            id: generateUUID(),
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'pdf_download',
            pdf_type: 'ai_implementation_guide'
        };
        
        // Save to file
        const filename = `pdf_download_${Date.now()}_${download.id.substring(0, 8)}.json`;
        const filepath = path.join(DATA_DIR, filename);
        await fs.writeFile(filepath, JSON.stringify(download, null, 2));
        
        console.log(`PDF download request saved: ${filename}`);
        console.log(`From: ${formData.name} (${formData.email}) - ${formData.company}`);
        
        res.json({
            success: true,
            message: 'Download link sent to your email',
            download_url: '/downloads/ai-implementation-guide.pdf',
            lead_id: download.id
        });
        
    } catch (error) {
        console.error('PDF download error:', error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while processing your request',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Backend server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
ensureDataDir().then(() => {
    app.listen(PORT, () => {
        console.log(`Auto Genie Hub backend server running on http://localhost:${PORT}`);
        console.log(`Health check: http://localhost:${PORT}/health`);
    });
});