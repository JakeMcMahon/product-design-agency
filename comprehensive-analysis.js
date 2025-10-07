import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function comprehensiveAnalysis() {
  console.log('Launching browser for comprehensive UX/UI analysis...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 3456, height: 2234 }); // MacBook Pro 16" resolution
    
    await page.setCacheEnabled(false);
    
    console.log('Navigating to website for comprehensive analysis...');
    await page.goto('http://127.0.0.1:8000?t=' + Date.now(), { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(3000);

    const screenshotsDir = './screenshots';
    await fs.mkdir(screenshotsDir, { recursive: true });

    // 1. Take full page screenshot for overview
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'full-site-desktop.png'),
      type: 'png',
      fullPage: true
    });
    console.log('✓ Saved: full-site-desktop.png');

    // 2. Header/Hero section
    const headerFound = await page.evaluate(() => {
      const headers = Array.from(document.querySelectorAll('section, header, div'));
      const headerEl = headers.find(el => {
        const text = el.textContent;
        return text.includes('Превратите ручные процессы') && text.includes('умную автоматизацию');
      });
      if (headerEl) {
        headerEl.setAttribute('data-screenshot', 'header');
        return true;
      }
      return false;
    });
    
    if (headerFound) {
      const headerElement = await page.$('[data-screenshot="header"]');
      if (headerElement) {
        await headerElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-01-header.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-01-header.png');
      }
    }

    // 3. Statistics/metrics section
    const statsFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, div'));
      const statsEl = sections.find(el => {
        const text = el.textContent;
        return text.includes('200+') && text.includes('компаний') && text.includes('72%') && text.includes('снижение');
      });
      if (statsEl) {
        statsEl.setAttribute('data-screenshot', 'stats');
        return true;
      }
      return false;
    });
    
    if (statsFound) {
      const statsElement = await page.$('[data-screenshot="stats"]');
      if (statsElement) {
        await statsElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-02-statistics.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-02-statistics.png');
      }
    }

    // 4. Timeline/Problem section (the cards we fixed)
    const timelineFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const timelineEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Почему 90% компаний теряют деньги') && 
               text.includes('Анализ бизнес-процессов');
      });
      if (timelineEl) {
        timelineEl.setAttribute('data-screenshot', 'timeline');
        return true;
      }
      return false;
    });
    
    if (timelineFound) {
      const timelineElement = await page.$('[data-screenshot="timeline"]');
      if (timelineElement) {
        await timelineElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-03-timeline.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-03-timeline.png');
      }
    }

    // 5. Features/Team section (Jake & Vyacheslav)
    const featuresFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const featuresEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Jake McMahon') && text.includes('Vyacheslav Razin');
      });
      if (featuresEl) {
        featuresEl.setAttribute('data-screenshot', 'features');
        return true;
      }
      return false;
    });
    
    if (featuresFound) {
      const featuresElement = await page.$('[data-screenshot="features"]');
      if (featuresElement) {
        await featuresElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-04-features.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-04-features.png');
      }
    }

    // 6. Process/How it works section
    const processFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const processEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Как мы работаем') || text.includes('процесс');
      });
      if (processEl) {
        processEl.setAttribute('data-screenshot', 'process');
        return true;
      }
      return false;
    });
    
    if (processFound) {
      const processElement = await page.$('[data-screenshot="process"]');
      if (processElement) {
        await processElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-05-process.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-05-process.png');
      }
    }

    // 7. Pricing section
    const pricingFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const pricingEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Стоимость') || text.includes('консультации');
      });
      if (pricingEl) {
        pricingEl.setAttribute('data-screenshot', 'pricing');
        return true;
      }
      return false;
    });
    
    if (pricingFound) {
      const pricingElement = await page.$('[data-screenshot="pricing"]');
      if (pricingElement) {
        await pricingElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-06-pricing.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-06-pricing.png');
      }
    }

    // 8. Lead magnets/CTA section
    const ctaFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const ctaEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Получить') || text.includes('бесплатно');
      });
      if (ctaEl) {
        ctaEl.setAttribute('data-screenshot', 'cta');
        return true;
      }
      return false;
    });
    
    if (ctaFound) {
      const ctaElement = await page.$('[data-screenshot="cta"]');
      if (ctaElement) {
        await ctaElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-07-cta.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-07-cta.png');
      }
    }

    // 9. Footer
    const footerFound = await page.evaluate(() => {
      const footers = Array.from(document.querySelectorAll('footer, section'));
      const footerEl = footers.find(el => {
        const text = el.textContent;
        return text.includes('©') || text.includes('AI Automation') || el.tagName === 'FOOTER';
      });
      if (footerEl) {
        footerEl.setAttribute('data-screenshot', 'footer');
        return true;
      }
      return false;
    });
    
    if (footerFound) {
      const footerElement = await page.$('[data-screenshot="footer"]');
      if (footerElement) {
        await footerElement.screenshot({ 
          path: path.join(screenshotsDir, 'section-08-footer.png'),
          type: 'png'
        });
        console.log('✓ Saved: section-08-footer.png');
      }
    }

    // 10. Take viewport-specific screenshots for above-the-fold analysis
    await page.setViewport({ width: 3456, height: 2234 });
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'above-fold-desktop.png'),
      type: 'png'
    });
    console.log('✓ Saved: above-fold-desktop.png');

    console.log('\n✅ Comprehensive UX/UI analysis screenshots completed!');
    console.log('📊 Ready for detailed design review with eagle-eye precision.');

  } catch (error) {
    console.error('Error in comprehensive analysis:', error);
  } finally {
    await browser.close();
  }
}

comprehensiveAnalysis();