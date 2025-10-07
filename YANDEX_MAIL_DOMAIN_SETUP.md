# Complete Yandex.Mail Setup for productquant.ru Domain

## Overview
Set up professional email (hello@productquant.ru) using Yandex's free business email service. This gives you a full mailbox, not just forwarding.

## Step-by-Step Setup Guide

### Step 1: Create Yandex Account (if needed)
1. Go to https://passport.yandex.ru/registration
2. Create a personal Yandex account (this will be your admin account)
3. Verify your phone number

### Step 2: Connect Your Domain to Yandex
1. Go to **https://360.yandex.ru/business/** (Yandex 360 for Business)
2. Click **"Попробовать бесплатно"** (Try for free)
3. Click **"Подключить домен"** (Connect domain)
4. Enter your domain: **productquant.ru**
5. Click **"Подключить"** (Connect)

### Step 3: Verify Domain Ownership
Yandex will ask you to verify you own productquant.ru. Choose one method:

**Option A: HTML File Verification**
1. Download the verification file from Yandex (like `yandex_4f3a2b1c5d6e7f8a.html`)
2. Upload to your website root at REG.RU
3. Make sure it's accessible at `https://productquant.ru/yandex_xxxxx.html`
4. Click "Проверить" (Verify) in Yandex

**Option B: DNS TXT Record** (if you can't upload files)
1. Copy the TXT record Yandex provides (like `yandex-verification: 4f3a2b1c5d6e7f8a`)
2. Go to REG.RU domain management
3. Add TXT record with this value
4. Wait 5-10 minutes and click verify

### Step 4: Configure DNS Records in REG.RU

**Login to REG.RU and go to DNS management for productquant.ru:**

1. **Navigate to DNS Settings:**
   - Login to https://www.reg.ru/user/
   - Find your domain "productquant.ru"
   - Click **"DNS-серверы и зона"** (DNS servers and zone)
   - Click **"Изменить зону"** (Edit zone)

2. **Add/Update MX Record:**
   ```
   Type: MX
   Subdomain: @ (or leave empty)
   Priority: 10
   Value: mx.yandex.net.
   TTL: 3600
   ```
   
   **IMPORTANT**: Delete any existing MX records first!

3. **Add SPF Record (for email authentication):**
   ```
   Type: TXT
   Subdomain: @ (or leave empty)
   Value: v=spf1 redirect=_spf.yandex.net
   TTL: 3600
   ```

4. **Add DKIM Record (Yandex will provide this):**
   ```
   Type: TXT
   Subdomain: mail._domainkey
   Value: (Yandex will give you this after setup)
   TTL: 3600
   ```

5. **Save all DNS changes**

### Step 5: Wait for DNS Propagation
- DNS changes take 5 minutes to 24 hours to propagate
- Usually works within 1-2 hours
- You can check status at: https://mxtoolbox.com/

### Step 6: Complete Yandex Setup

1. **Return to Yandex 360 dashboard**
2. Click **"Проверить записи"** (Check records)
3. Once verified, you'll see green checkmarks

### Step 7: Create Email Accounts

1. In Yandex 360, go to **"Сотрудники"** (Employees)
2. Click **"Добавить сотрудника"** (Add employee)
3. Fill in:
   - Name: Your Name (or "Hello")
   - Login: **hello** (this creates hello@productquant.ru)
   - Password: Choose a strong password
   - Role: Administrator
4. Click **"Добавить"** (Add)

### Step 8: Access Your New Email

**Webmail Access:**
- Go to: https://mail.yandex.ru
- Login with: **hello@productquant.ru**
- Password: (what you set in step 7)

**Mobile Apps:**
- Download "Yandex.Mail" app
- Login with hello@productquant.ru

**Desktop Email Client (Outlook/Thunderbird/Apple Mail):**
```
Incoming Mail (IMAP):
Server: imap.yandex.ru
Port: 993
Security: SSL/TLS
Username: hello@productquant.ru
Password: (your password)

Outgoing Mail (SMTP):
Server: smtp.yandex.ru
Port: 465
Security: SSL/TLS
Username: hello@productquant.ru
Password: (your password)
```

### Step 9: Test Your Email

1. **Send a test email TO hello@productquant.ru** from Gmail/another email
2. **Check it arrives** in Yandex.Mail
3. **Reply to test** sending works
4. **Send from hello@productquant.ru** to test outgoing mail

### Step 10: Update Your Website

Update email settings in your code:
- `.env` file: `VITE_CONTACT_EMAIL=hello@productquant.ru`
- Backend configs: Update notification settings

## Common Issues & Solutions

### "MX records not found"
- Make sure you deleted OLD MX records in REG.RU
- Only have ONE MX record pointing to mx.yandex.net
- Wait longer for DNS propagation

### "SPF record incorrect"
- Should be exactly: `v=spf1 redirect=_spf.yandex.net`
- No extra spaces or characters

### Can receive but can't send emails
- Check SMTP settings are correct
- Make sure using port 465 with SSL
- Try app-specific password if 2FA is enabled

### Emails going to spam
- Add SPF record (step 4.3)
- Add DKIM record when Yandex provides it
- Send test emails to build reputation

## Additional Features

Once setup, you get:
- ✅ Unlimited email addresses @productquant.ru
- ✅ 10GB+ storage per mailbox
- ✅ Calendar, contacts, disk storage
- ✅ Mobile and desktop apps
- ✅ Spam protection
- ✅ Email aliases and forwarding
- ✅ Vacation responder

## Creating More Email Addresses

Want more addresses like info@, support@, jake@productquant.ru?

1. Go to Yandex 360 dashboard
2. Add new employees/aliases
3. Each can have their own login or be an alias to hello@

## Important Notes

- ⚠️ **For AI subdomain**: If you want hello@ai.productquant.ru, you need to add ai.productquant.ru as a separate domain in Yandex
- ⚠️ **Keep DNS records**: Don't delete MX/SPF records or email will stop working
- ⚠️ **Free tier**: Free for up to 1000 users (more than enough!)

## Quick Checklist

- [ ] Create Yandex account
- [ ] Add domain in Yandex 360
- [ ] Verify domain ownership
- [ ] Add MX record in REG.RU: `10 mx.yandex.net.`
- [ ] Add SPF record in REG.RU
- [ ] Wait for DNS propagation
- [ ] Create hello@ mailbox
- [ ] Test sending and receiving
- [ ] Update website configuration

Your professional email will be ready in about 1-2 hours! 📧🚀