import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function desktopAnalysis() {
  console.log('Launching browser for desktop analysis...');
  
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
    
    console.log('Navigating to website with MacBook Pro 16 viewport...');
    await page.goto('http://127.0.0.1:8000?t=' + Date.now(), { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(3000);

    const screenshotsDir = './screenshots';
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Take full page screenshot first
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'desktop-full-page.png'),
      type: 'png',
      fullPage: true
    });
    console.log('✓ Saved: desktop-full-page.png');

    // Take header section screenshot
    const headerFound = await page.evaluate(() => {
      const headers = Array.from(document.querySelectorAll('section, header, div'));
      const headerEl = headers.find(el => {
        const text = el.textContent;
        return text.includes('Превратите ручные процессы') && text.includes('Получить консультацию');
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
          path: path.join(screenshotsDir, 'desktop-header.png'),
          type: 'png'
        });
        console.log('✓ Saved: desktop-header.png');
      }
    }

    // Take statistics cards screenshot
    const statsFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, div'));
      const statsEl = sections.find(el => {
        const text = el.textContent;
        return text.includes('200+') && text.includes('компаний') && text.includes('72%');
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
          path: path.join(screenshotsDir, 'desktop-statistics.png'),
          type: 'png'
        });
        console.log('✓ Saved: desktop-statistics.png');
      }
    }

    // Take features section screenshot
    const featuresFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const featuresEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Jake McMahon') && text.includes('CTO в edTech платформе');
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
          path: path.join(screenshotsDir, 'desktop-features.png'),
          type: 'png'
        });
        console.log('✓ Saved: desktop-features.png');
      }
    }

    // Take timeline section screenshot (the one we've been working on)
    const timelineFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const timelineEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Анализ бизнес-процессов') && 
               text.includes('ИИ-решения под ключ') && 
               text.includes('Реальные кейсы');
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
          path: path.join(screenshotsDir, 'desktop-timeline-cards.png'),
          type: 'png'
        });
        console.log('✓ Saved: desktop-timeline-cards.png');
      }
    }

    // Take pricing section screenshot
    const pricingFound = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const pricingEl = sections.find(section => {
        const text = section.textContent;
        return text.includes('Стоимость') && text.includes('консультации');
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
          path: path.join(screenshotsDir, 'desktop-pricing.png'),
          type: 'png'
        });
        console.log('✓ Saved: desktop-pricing.png');
      }
    }

    console.log('\\n✅ Desktop analysis completed with MacBook Pro 16 viewport!');

  } catch (error) {
    console.error('Error in desktop analysis:', error);
  } finally {
    await browser.close();
  }
}

desktopAnalysis();