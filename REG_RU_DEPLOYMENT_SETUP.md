# REG.RU Deployment Setup for ai.productquant.ru

## Pre-Deployment Checklist ✅

All the following have been prepared in your repository:

- ✅ **PDF paths fixed**: API now points to `/AI-Automation-Readiness-Assessment.pdf`
- ✅ **Production environment**: `.env.production` created with correct URLs
- ✅ **Database schema**: Updated with correct PDF path
- ✅ **API endpoints**: All configured for `ai.productquant.ru`

## REG.RU Server Setup Steps

### 1. Upload Files
Upload all files from your repository to your reg.ru hosting root directory.

### 2. Database Configuration

**Step 2a: Create Database**
```sql
-- In your reg.ru MySQL panel, create database:
CREATE DATABASE ai_automation_ru CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**Step 2b: Create Database User**
```sql
-- Create dedicated user (use reg.ru database panel):
CREATE USER 'ai_user'@'localhost' IDENTIFIED BY 'YOUR_SECURE_PASSWORD_HERE';
GRANT SELECT, INSERT, UPDATE, DELETE ON ai_automation_ru.* TO 'ai_user'@'localhost';
FLUSH PRIVILEGES;
```

**Step 2c: Import Schema**
- Import `/backend/database/ai-automation-schema.sql` into your `ai_automation_ru` database
- This will create all tables and insert default settings

### 3. Update Configuration File

Edit `/backend/config/ai-automation-config.php`:

```php
// Line 13: Update with your actual secure password
define('AI_DB_PASS', 'YOUR_ACTUAL_SECURE_PASSWORD');
```

### 4. Environment Variables

**Option A: Use .env.production file**
- Rename `.env.production` to `.env` on your server

**Option B: Set in hosting panel**
Set these environment variables in your reg.ru hosting panel:
```
VITE_API_BASE_URL=https://ai.productquant.ru/backend/api
VITE_DOMAIN=ai.productquant.ru
VITE_SITE_URL=https://ai.productquant.ru
```

### 5. File Permissions
Ensure these directories are writable:
```bash
chmod 755 /backend/api/
chmod 644 /public/AI-Automation-Readiness-Assessment.pdf
```

### 6. Test Your Setup

**Test PDF Download:**
1. Visit: `https://ai.productquant.ru`
2. Click "Скачать руководство"
3. Fill form and submit
4. PDF should download automatically

**Test API Endpoint:**
```bash
curl -X POST https://ai.productquant.ru/backend/api/test-endpoint.php
```

## What Will Happen After Setup

### ✅ With Full API Setup:
- PDF downloads work ✅
- Lead data gets stored in database ✅
- Email notifications sent ✅
- Lead scoring calculated ✅
- Full analytics tracking ✅

### ✅ Without API Setup (Fallback):
- PDF downloads still work ✅ (direct file download)
- No lead tracking (but downloads work)

## Troubleshooting

**If downloads don't work:**
1. Check file exists: `/public/AI-Automation-Readiness-Assessment.pdf`
2. Check file permissions
3. Check browser console for errors

**If API doesn't work:**
1. Check database connection in `/backend/config/ai-automation-config.php`
2. Check error logs in reg.ru panel
3. Downloads will still work via fallback mechanism

## Security Notes

- ✅ Database uses separate `ai_automation_ru` database
- ✅ Dedicated database user with limited permissions
- ✅ Rate limiting configured (3 downloads/hour, 10/day)
- ✅ Input sanitization and validation
- ✅ CORS configured for ai.productquant.ru only

Your site is ready for production deployment! 🚀