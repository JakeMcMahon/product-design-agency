# Yandex SEO Setup Guide for ai.productquant.ru

## ⚠️ IMPORTANT: Subdomain Isolation

**These SEO files are specifically for the AI automation subdomain `ai.productquant.ru` ONLY.**

### Subdomain SEO Separation:
- **ai.productquant.ru** (AI Automation) - Uses THESE files
- **productquant.ru** (Product Analytics) - Needs SEPARATE SEO files

Each domain/subdomain requires:
- ✅ **Separate Yandex Webmaster account** 
- ✅ **Separate Yandex.Metrica counter**
- ✅ **Independent sitemap.xml**
- ✅ **Independent robots.txt**
- ✅ **Different structured data**

**Why?** Different businesses, content, keywords, and tracking requirements.

## ✅ Files Created for Yandex Optimization (ai.productquant.ru ONLY)

Your repository now includes complete Yandex SEO optimization for the AI automation subdomain:

### 1. **Yandex Webmaster Verification** 
- `public/yandex_verification.html` - Placeholder for AI subdomain verification

### 2. **Yandex.Metrica Tracking**
- `public/yandex-metrica-config.js` - AI automation tracking with custom events

### 3. **Russian XML Sitemap**
- `public/sitemap.xml` - AI automation pages only (ai.productquant.ru/*)

### 4. **Yandex-Optimized Robots.txt**
- `public/robots.txt` - Host directive: ai.productquant.ru

### 5. **Russian Structured Data**
- `public/structured-data-ru.json` - AI automation business data

## Setup Instructions

### Step 1: Yandex Webmaster Tools Setup
1. Go to [Yandex Webmaster](https://webmaster.yandex.ru/)
2. Add site: `https://ai.productquant.ru` (NOT productquant.ru - this is subdomain specific!)
3. Choose verification method:
   - **Option A**: Download verification file and replace `yandex_verification.html`
   - **Option B**: Add meta tag to your `index.html` head section
4. Complete verification
5. **Note**: If you also have productquant.ru, that needs a SEPARATE Webmaster verification

### Step 2: Yandex.Metrica Setup
1. Go to [Yandex.Metrica](https://metrica.yandex.ru/)
2. Create NEW counter specifically for `ai.productquant.ru` (separate from any productquant.ru counter)
3. Get your counter ID (e.g., 12345678)
4. Update `yandex-metrica-config.js`:
   ```javascript
   // Replace XXXXXXXX with your actual counter ID
   ym('12345678', 'init', { ... });
   ```
5. Add to your `index.html` before closing `</head>`:
   ```html
   <script src="/yandex-metrica-config.js"></script>
   <noscript>
     <div><img src="https://mc.yandex.ru/watch/12345678" style="position:absolute; left:-9999px;" alt="" /></div>
   </noscript>
   ```

### Step 3: Add Structured Data to HTML
Add this to your `index.html` head section:
```html
<script type="application/ld+json" src="/structured-data-ru.json"></script>
```

### Step 4: Submit to Yandex
1. In Yandex Webmaster, submit your sitemap: `https://ai.productquant.ru/sitemap.xml`
2. Request indexing for main pages
3. Monitor crawl errors and fix any issues

### Step 5: Russian Search Optimization Tips

#### Keywords for Russian Market:
- **Primary**: "автоматизация ИИ", "внедрение искусственного интеллекта", "ИИ для бизнеса"
- **Secondary**: "роботизация процессов", "машинное обучение", "автоматизация документооборота"
- **Long-tail**: "как внедрить ИИ в компанию", "стоимость автоматизации ИИ", "ИИ консалтинг Москва"

#### Content Localization:
- ✅ All meta tags in Russian
- ✅ Business hours in Moscow timezone
- ✅ Phone number in Russian format
- ✅ Currency in RUB (₽)
- ✅ Address in Russian format

#### Yandex Ranking Factors:
- **Behavioral Factors**: High user engagement (low bounce rate, high time on site)
- **Regional Relevance**: Russian phone, address, Moscow timezone
- **Mobile-First**: Responsive design optimized for mobile
- **Site Speed**: Fast loading times (especially important for Yandex)
- **Social Signals**: Russian social networks (VK, Telegram)

## Monitoring & Analytics

### Key Yandex.Metrica Events to Track:
```javascript
// Already configured in yandex-metrica-config.js
trackPDFDownload('ai_guide');        // PDF downloads
trackConsultationRequest('ai_strategy'); // Consultation requests  
trackFormSubmission('contact');       // Contact form submissions
```

### Yandex Webmaster Reports to Monitor:
- **Crawl Errors**: Fix any blocked pages
- **Search Queries**: Optimize for top Russian keywords
- **Index Coverage**: Ensure all important pages are indexed
- **Mobile Usability**: Check mobile-friendliness
- **Site Speed**: Monitor loading times

## Russian SEO Best Practices

### Content Strategy:
- Use Russian keywords naturally (not stuffed)
- Create content answering Russian business questions
- Include local references (Russian companies, cases, regulations)
- Add testimonials from Russian clients

### Technical SEO:
- ✅ Hreflang="ru" implemented
- ✅ Russian language meta tags
- ✅ Structured data in Russian
- ✅ Moscow timezone in business hours
- ✅ Russian phone number format

### Local SEO:
- Register in Russian business directories
- Get reviews from Russian clients
- Use Russian social media platforms
- Include Russian business registration info

Your site is now fully optimized for Yandex search! 🇷🇺🚀

## Next Steps After Deployment:
1. Set up Yandex Webmaster account for `ai.productquant.ru` subdomain
2. Create separate Yandex.Metrica counter for AI automation business
3. Add tracking codes to your AI automation site
4. Submit sitemap to Yandex: `https://ai.productquant.ru/sitemap.xml`
5. Monitor AI automation rankings separately from main domain

## Managing Multiple Domains:

### For ai.productquant.ru (AI Automation):
- Yandex Webmaster: ai.productquant.ru account
- Yandex.Metrica: Counter #1 (AI tracking)
- Keywords: "автоматизация ИИ", "внедрение ИИ"
- Content: Russian AI automation services

### For productquant.ru (Product Analytics):
- Yandex Webmaster: Separate productquant.ru account
- Yandex.Metrica: Counter #2 (Analytics tracking)
- Keywords: "продуктовая аналитика", "data science"
- Content: Product analytics services

**Remember**: Search engines treat subdomains as separate entities. Each needs independent SEO optimization!