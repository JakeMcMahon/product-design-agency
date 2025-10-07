# AI Automation Russia Deployment Guide
## Deployment to ai.productquant.ru

This guide will help you deploy the Russian AI automation landing page to the `ai.productquant.ru` subdomain with complete separation from the main productquant.ru business.

## 🚀 Quick Overview

- **Domain**: ai.productquant.ru
- **Homepage**: Russian AI Automation Landing Page (no URL slugs)
- **Database**: Completely separate from productquant.ru
- **Business**: Independent AI automation business
- **Future**: All pages ready for translation when needed

## 📋 Prerequisites

1. **Server Access**: SSH access to your server (209.38.85.211)
2. **Domain Control**: Access to reg.ru DNS management
3. **Database Access**: MySQL/MariaDB server access
4. **Web Server**: Nginx or Apache running

## 🔧 Step 1: DNS Configuration (reg.ru)

1. **Log into reg.ru control panel**
2. **Navigate to DNS management for productquant.ru**
3. **Add A Record**:
   - Name: `ai`
   - Type: `A`
   - Value: `209.38.85.211`
   - TTL: `300` (5 minutes)

## 🗃️ Step 2: Database Setup

1. **Create AI Automation Database**:
```sql
-- Run this as MySQL root user
mysql -u root -p
SOURCE /path/to/ai-automation-ru-final/backend/database/ai-automation-schema.sql
```

2. **Create Database User**:
```sql
CREATE USER 'ai_user'@'localhost' IDENTIFIED BY 'your_secure_password_here';
GRANT SELECT, INSERT, UPDATE, DELETE ON ai_automation_ru.* TO 'ai_user'@'localhost';
FLUSH PRIVILEGES;
```

3. **Update Configuration**:
   - Edit `/backend/config/ai-automation-config.php`
   - Update `AI_DB_PASS` with your actual database password
   - Update email settings with your actual email addresses

## 📁 Step 3: File Deployment

1. **Create Directory Structure**:
```bash
# Create directory for AI subdomain
sudo mkdir -p /var/www/ai.productquant.ru
sudo chown www-data:www-data /var/www/ai.productquant.ru
```

2. **Build and Deploy**:
```bash
# In your ai-automation-ru-final directory
npm run build

# Copy built files to server
sudo cp -r dist/* /var/www/ai.productquant.ru/
sudo cp -r backend /var/www/ai.productquant.ru/
```

3. **Set Permissions**:
```bash
sudo chown -R www-data:www-data /var/www/ai.productquant.ru
sudo chmod -R 755 /var/www/ai.productquant.ru
sudo chmod -R 664 /var/www/ai.productquant.ru/backend/config/*
```

## 🌐 Step 4: Web Server Configuration

### For Nginx:

Create `/etc/nginx/sites-available/ai.productquant.ru`:

```nginx
server {
    listen 80;
    server_name ai.productquant.ru;
    root /var/www/ai.productquant.ru;
    index index.html;

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API endpoints
    location /backend/api/ {
        try_files $uri $uri/ =404;
        
        location ~ \.php$ {
            include fastcgi_params;
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param HTTP_X_FORWARDED_PROTO $scheme;
        }
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/ai.productquant.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### For Apache:

Create `/etc/apache2/sites-available/ai.productquant.ru.conf`:

```apache
<VirtualHost *:80>
    ServerName ai.productquant.ru
    DocumentRoot /var/www/ai.productquant.ru

    <Directory /var/www/ai.productquant.ru>
        AllowOverride All
        Require all granted
        
        # Handle React Router
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # PHP configuration
    <Directory /var/www/ai.productquant.ru/backend/api>
        Options -Indexes
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ai.productquant.ru_error.log
    CustomLog ${APACHE_LOG_DIR}/ai.productquant.ru_access.log combined
</VirtualHost>
```

Enable the site:
```bash
sudo a2ensite ai.productquant.ru.conf
sudo systemctl reload apache2
```

## 🔒 Step 5: SSL Certificate

Install SSL certificate using Let's Encrypt:

```bash
sudo certbot --nginx -d ai.productquant.ru
# or for Apache:
sudo certbot --apache -d ai.productquant.ru
```

## ✅ Step 6: Testing

1. **Test DNS Resolution**:
```bash
nslookup ai.productquant.ru
```

2. **Test Website**:
   - Visit `https://ai.productquant.ru`
   - Should show Russian AI automation landing page
   - Test consultation form submission
   - Test PDF download functionality

3. **Test API Endpoints**:
```bash
curl -X POST https://ai.productquant.ru/backend/api/ai-consultation-booking.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Co","industry":"technology","challenge":"automation"}'
```

## 📧 Step 7: Email Configuration

Update email settings in `/var/www/ai.productquant.ru/backend/config/ai-automation-config.php`:

```php
define('AI_NOTIFICATION_EMAIL', 'your-notifications@productquant.ru');
define('AI_FROM_EMAIL', 'noreply@productquant.ru');
```

## 📊 Step 8: Analytics & Monitoring

1. **Add Google Analytics** (if desired):
   - Update the Russian page with your GA4 tracking code
   - Track consultation and PDF download events

2. **Set up Log Monitoring**:
```bash
tail -f /var/log/nginx/access.log | grep ai.productquant.ru
```

## 🎯 Step 9: Content Updates

### When you're ready to translate other pages:

1. **Translate page content** in `/src/pages/`
2. **Update navigation** in the Russian AI page to show links
3. **Rebuild and redeploy**:
```bash
npm run build
sudo cp -r dist/* /var/www/ai.productquant.ru/
```

## 🔍 Troubleshooting

### Common Issues:

1. **"Page not found" for API calls**:
   - Check PHP-FPM is running: `sudo systemctl status php8.1-fpm`
   - Check file permissions on `/backend/api/` directory

2. **Database connection errors**:
   - Verify database credentials in config
   - Check if MySQL is running: `sudo systemctl status mysql`

3. **CORS errors**:
   - Check `Access-Control-Allow-Origin` headers in API files
   - Ensure domain matches exactly

4. **Email notifications not working**:
   - Check PHP mail configuration
   - Consider using a mail service like SendGrid or Mailgun

## 📈 Success Metrics

After deployment, monitor:
- **Page views** on ai.productquant.ru
- **Consultation form submissions** in database
- **PDF downloads** tracked in database
- **Lead quality** using the built-in scoring system

## 🚀 Go Live Checklist

- [ ] DNS A record created and propagated
- [ ] Database created and configured
- [ ] Files deployed to server
- [ ] Web server configured and tested
- [ ] SSL certificate installed
- [ ] API endpoints tested
- [ ] Email notifications configured
- [ ] Analytics tracking implemented
- [ ] Backup procedures in place

## 📞 Support

If you need assistance with deployment:
1. Check server error logs first
2. Verify all configuration files
3. Test each component separately
4. Ensure database connection is working

---

**Your AI automation business is ready to launch on ai.productquant.ru!** 🎉