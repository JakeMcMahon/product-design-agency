# AI Automation Russia - cPanel Deployment Guide
## Setup via reg.ru Dashboard / cPanel Interface

This guide shows how to deploy the AI automation website to `ai.productquant.ru` using the cPanel web interface instead of SSH/terminal commands.

## 🎛️ **Why Use cPanel?**

- ✅ **Visual interface** - No command line needed
- ✅ **Built-in tools** - File Manager, phpMyAdmin, etc.
- ✅ **Auto SSL** - Easy Let's Encrypt integration  
- ✅ **Error logs** - Built-in log viewer
- ✅ **User-friendly** - Perfect for non-technical users

## 📋 **Step 1: Create Subdomain (reg.ru Dashboard)**

1. **Login to reg.ru control panel**
2. **Navigate to "Subdomains" or "Поддомены"**
3. **Create New Subdomain**:
   - Subdomain: `ai`
   - Domain: `productquant.ru`
   - Document Root: `/ai.productquant.ru` or `/public_html/ai`
   - Click "Create"

## 🗃️ **Step 2: Database Setup (cPanel)**

1. **Go to "MySQL Databases" section**
2. **Create Database**:
   - Database Name: `ai_automation_ru`
   - Click "Create Database"

3. **Create Database User**:
   - Username: `ai_user`
   - Password: (generate strong password and save it!)
   - Click "Create User"

4. **Add User to Database**:
   - Select User: `ai_user`
   - Select Database: `ai_automation_ru`
   - Privileges: Select "ALL PRIVILEGES"
   - Click "Make Changes"

5. **Import Database Schema**:
   - Go to "phpMyAdmin"
   - Select `ai_automation_ru` database
   - Click "Import" tab
   - Upload `backend/database/ai-automation-schema.sql` from your computer
   - Click "Import"

## 📁 **Step 3: File Upload (File Manager)**

1. **Open "File Manager" in cPanel**
2. **Navigate to subdomain directory** (e.g., `/ai.productquant.ru/` or `/public_html/ai/`)

3. **Upload Website Files**:

   **Method A - Upload ZIP (Recommended):**
   - Create ZIP file of `dist` folder contents on your computer
   - Upload ZIP to subdomain root directory
   - Extract ZIP in File Manager
   - Upload `backend` folder as separate ZIP
   - Extract backend ZIP

   **Method B - Individual Upload:**
   - Upload `index.html` to subdomain root
   - Create `assets` folder, upload CSS/JS files
   - Create `backend` folder, upload all PHP files

4. **Final Structure Should Look Like**:
   ```
   /ai.productquant.ru/ (or /public_html/ai/)
   ├── index.html
   ├── assets/
   │   ├── index-xxxxx.js
   │   └── index-xxxxx.css
   ├── backend/
   │   ├── api/
   │   │   ├── ai-consultation-booking.php
   │   │   └── ai-pdf-download.php
   │   ├── config/
   │   │   └── ai-automation-config.php
   │   └── database/
   │       └── ai-automation-schema.sql
   ```

## ⚙️ **Step 4: Configure Database Connection**

1. **Edit Configuration File** (via File Manager):
   - Navigate to `backend/config/ai-automation-config.php`
   - Right-click file → "Code Editor" or "Edit"
   
2. **Update Database Settings**:
   ```php
   // Update these values with your actual cPanel database info
   define('AI_DB_HOST', 'localhost');  
   define('AI_DB_NAME', 'your_cpanel_username_ai_automation_ru');  
   define('AI_DB_USER', 'your_cpanel_username_ai_user');
   define('AI_DB_PASS', 'your_generated_password');
   ```

   **⚠️ Important**: cPanel usually prefixes database names and usernames with your account name. For example:
   - If your cPanel username is `product123`
   - Database name becomes: `product123_ai_automation_ru`
   - Database user becomes: `product123_ai_user`

3. **Update Email Settings** (same file):
   ```php
   define('AI_NOTIFICATION_EMAIL', 'your-email@productquant.ru');
   define('AI_FROM_EMAIL', 'noreply@productquant.ru');
   define('AI_FROM_NAME', 'AI Automation Russia');
   ```

## 🔧 **Step 5: Set File Permissions**

1. **Set Permissions for Backend**:
   - Right-click `backend` folder in File Manager
   - Select "Permissions"
   - Set folders to `755`, files to `644`
   - Check "Recurse into subdirectories"
   - Click "Change Permissions"

2. **Special Permissions for Config**:
   - Navigate to `backend/config/`
   - Right-click `ai-automation-config.php`
   - Set permissions to `600` (more secure)

## 🌐 **Step 6: Configure .htaccess (for React Router)**

1. **Create .htaccess file** in subdomain root directory:
   - In File Manager, click "New File"
   - Name: `.htaccess`
   - Edit the file and paste:

   ```apache
   # Handle React Router
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       
       # Handle client-side routing
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   
   # Security headers
   <IfModule mod_headers.c>
       Header always set X-Frame-Options SAMEORIGIN
       Header always set X-Content-Type-Options nosniff
       Header always set X-XSS-Protection "1; mode=block"
   </IfModule>
   
   # Cache static assets
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType image/gif "access plus 1 year"
       ExpiresByType image/svg+xml "access plus 1 year"
   </IfModule>
   
   # Protect sensitive files
   <Files "*.php">
       <RequireAll>
           Require all granted
       </RequireAll>
   </Files>
   
   # Protect config files
   <Files "ai-automation-config.php">
       Order allow,deny
       Deny from all
   </Files>
   ```

## 🔒 **Step 7: SSL Certificate (cPanel)**

1. **Enable SSL Certificate**:
   - Go to "SSL/TLS" section in cPanel
   - Click "Let's Encrypt SSL"
   - Add domain: `ai.productquant.ru`
   - Click "Issue Certificate"

2. **Force HTTPS**:
   - In SSL/TLS section, go to "Force HTTPS Redirect"
   - Enable redirect for `ai.productquant.ru`

## 📧 **Step 8: Email Setup (Optional)**

1. **Create Email Account** (if needed):
   - Go to "Email Accounts" in cPanel
   - Create `noreply@productquant.ru`
   - Set password and disk space

2. **Test Email Functionality**:
   - Send a test consultation form
   - Check if notification emails arrive

## 🔍 **Step 9: PHP Version Check**

1. **Ensure PHP 7.4+ is Active**:
   - Go to "PHP Selector" in cPanel
   - Select PHP 8.0 or 8.1 (recommended)
   - Enable required extensions:
     - ✅ `pdo_mysql`
     - ✅ `json`
     - ✅ `curl`
     - ✅ `mbstring`

## ✅ **Step 10: Testing & Verification**

### **Basic Functionality Test:**
1. **Visit Website**: `https://ai.productquant.ru`
   - Should show Russian AI automation page
   - No SSL warnings
   - Page loads completely

2. **Test Consultation Form**:
   - Fill out consultation popup
   - Submit form
   - Check for success message
   - Verify email notification received

3. **Test PDF Download**:
   - Click PDF download button
   - Fill out form
   - Verify download starts
   - Check database for lead record

### **Technical Verification:**
1. **Check Database**:
   - Go to phpMyAdmin
   - Open `ai_automation_ru` database
   - Look for records in `ai_leads` table after form submission

2. **Check Error Logs**:
   - Go to "Error Logs" in cPanel
   - Look for any PHP errors or warnings
   - Fix any issues found

3. **Browser Developer Tools**:
   - Open Network tab in browser
   - Submit forms and check API responses
   - Look for 200 OK responses from API endpoints

## 🛠️ **Common cPanel Troubleshooting**

### **"Page Not Found" Errors:**
- ✅ Check `.htaccess` file exists and has correct content
- ✅ Verify file permissions (755 for folders, 644 for files)
- ✅ Ensure `index.html` is in subdomain root directory

### **Database Connection Errors:**
- ✅ Double-check database name prefix in config file
- ✅ Verify database user has ALL PRIVILEGES
- ✅ Test database connection in phpMyAdmin
- ✅ Check if PHP version supports `PDO_MySQL`

### **API/Form Errors:**
- ✅ Check PHP version is 7.4 or higher
- ✅ Verify backend folder permissions (755)
- ✅ Check PHP error logs in cPanel
- ✅ Ensure all required PHP extensions are enabled

### **Email Not Working:**
- ✅ Verify email account exists in cPanel
- ✅ Check spam/junk folder for notifications
- ✅ Consider using external SMTP service (SendGrid, etc.)
- ✅ Test with simple PHP mail() function first

### **SSL Certificate Issues:**
- ✅ Wait 10-15 minutes after certificate issuance
- ✅ Clear browser cache and try again
- ✅ Check if domain DNS has propagated
- ✅ Verify certificate covers `ai.productquant.ru`

## 📱 **Mobile & Performance Optimization**

1. **Test Mobile Responsiveness**:
   - Use cPanel "Mobile Preview" if available
   - Test on actual mobile devices
   - Check form submissions work on mobile

2. **Performance Optimization**:
   - Enable gzip compression in cPanel
   - Use "Optimize Website" feature if available
   - Monitor site speed with built-in tools

## 🔄 **Future Updates Process**

When you need to update the site:

1. **Build New Version**:
   - Run `npm run build` on your computer
   - Create ZIP of new `dist` folder

2. **Upload via cPanel**:
   - Backup current files first
   - Upload and extract new ZIP
   - Clear browser cache to see changes

3. **Database Updates**:
   - Use phpMyAdmin to run any new SQL commands
   - Always backup database before making changes

## 📊 **Monitoring & Maintenance**

1. **Regular Checks**:
   - Monitor error logs weekly
   - Check form submissions in database
   - Verify SSL certificate renewal

2. **Backup Strategy**:
   - Use cPanel backup feature monthly
   - Download database backups via phpMyAdmin
   - Keep local copies of all files

## 🎯 **Success Checklist**

- [ ] Subdomain `ai.productquant.ru` created and accessible
- [ ] Database created with correct schema imported
- [ ] All files uploaded with correct permissions
- [ ] .htaccess file configured for React Router
- [ ] SSL certificate installed and HTTPS forced
- [ ] Database connection configured correctly
- [ ] Consultation form working and sending emails
- [ ] PDF download form functional
- [ ] No errors in cPanel error logs
- [ ] Mobile responsiveness tested
- [ ] Site speed acceptable

## 🚀 **You're Live!**

Once all steps are complete, your professional AI automation business will be running at `https://ai.productquant.ru` with:

- ✅ Russian localization
- ✅ Professional design
- ✅ Working forms and lead capture
- ✅ Separate business infrastructure
- ✅ SSL security
- ✅ Mobile responsiveness

**Congratulations! Your AI automation business is now live and ready to generate leads!** 🎉

---

## 📞 **Need Help?**

If you encounter issues during setup:
1. Check cPanel error logs first
2. Verify each step was completed correctly
3. Test components individually (database, forms, etc.)
4. Contact reg.ru support for hosting-specific issues

**This cPanel approach is much more user-friendly than SSH and gives you the same professional result!**