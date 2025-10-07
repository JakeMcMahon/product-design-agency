# REG.RU Email Setup Guide for hello@productquant.ru

## Option 1: Email Forwarding (Simplest)

If you already have a Gmail/Yandex/other email, you can forward hello@productquant.ru to it:

1. **Login to REG.RU Control Panel**
   - Go to https://www.reg.ru/user/
   - Navigate to your domain: productquant.ru

2. **Set Up Email Forwarding**
   - Click "Почта" (Mail) section
   - Select "Переадресация почты" (Email Forwarding)
   - Add forwarding rule:
     - From: hello@productquant.ru
     - To: your-existing-email@gmail.com
   - Save settings

3. **DNS Configuration (if needed)**
   - MX records should point to REG.RU mail servers
   - Usually automatic if using REG.RU DNS

## Option 2: REG.RU Mail Hosting (Full Mailbox)

For a professional mailbox with webmail access:

1. **Purchase Mail Hosting**
   - In REG.RU panel, go to "Услуги" (Services)
   - Select "Почта для домена" (Domain Email)
   - Choose plan (usually starts at ~100 RUB/month)
   - Purchase for productquant.ru domain

2. **Create Mailbox**
   - Go to Mail Management
   - Click "Создать почтовый ящик" (Create Mailbox)
   - Username: hello
   - Domain: productquant.ru
   - Set password
   - Set quota (e.g., 1GB)

3. **Access Your Email**
   - Webmail: https://mail.reg.ru
   - Login: hello@productquant.ru
   - Password: (what you set)

4. **Email Client Settings** (for Outlook/Thunderbird/Apple Mail)
   ```
   Incoming (IMAP):
   Server: mail.reg.ru
   Port: 993 (SSL)
   Username: hello@productquant.ru
   
   Outgoing (SMTP):
   Server: mail.reg.ru
   Port: 465 (SSL)
   Username: hello@productquant.ru
   ```

## Option 3: Use Yandex.Mail for Domain (Free)

Professional email using Yandex infrastructure:

1. **Connect Domain to Yandex**
   - Go to https://connect.yandex.ru/
   - Click "Подключить домен" (Connect Domain)
   - Enter: productquant.ru
   - Follow verification steps

2. **Add DNS Records in REG.RU**
   - In REG.RU DNS settings, add:
   ```
   MX record: 10 mx.yandex.net
   TXT record: v=spf1 redirect=_spf.yandex.net
   ```

3. **Create Email Account**
   - In Yandex.Connect, create user
   - Email: hello@productquant.ru
   - Access at: https://mail.yandex.ru

## Option 4: Google Workspace (Professional)

For Google's business email (costs ~$6/month):

1. Sign up at https://workspace.google.com
2. Verify domain ownership
3. Add Google MX records in REG.RU
4. Create hello@productquant.ru account

## Recommended Setup for Your Needs

Since you're running a professional AI automation business:

**Best Option: Yandex.Mail for Domain (Option 3)**
- ✅ Free for up to 1000 users
- ✅ Professional Russian service
- ✅ Good for Russian clients
- ✅ Reliable infrastructure
- ✅ Mobile apps available

**Quick Start: Email Forwarding (Option 1)**
- ✅ Immediate setup (5 minutes)
- ✅ No additional cost
- ✅ Use existing email
- ❌ Can't send FROM hello@productquant.ru

## Testing Your Email

After setup, test by:
1. Send test email to hello@productquant.ru
2. Check it arrives
3. Reply to confirm sending works
4. Update any forms/websites with new email

## SPF/DKIM/DMARC Records (Anti-Spam)

Add these DNS records in REG.RU for better deliverability:

```
TXT: v=spf1 include:_spf.reg.ru ~all
TXT: _dmarc.productquant.ru: v=DMARC1; p=none; rua=mailto:hello@productquant.ru
```

Your email will be ready for professional communication! 📧