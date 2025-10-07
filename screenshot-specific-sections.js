import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function takeSpecificScreenshots() {
  console.log('Launching browser...');
  
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
    await page.setViewport({ width: 1728, height: 1117 }); // MacBook Pro 16" scaled
    
    console.log('Navigating to website...');
    await page.goto('http://209.38.85.211:8000', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(2000);

    const screenshotsDir = './screenshots';
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Take screenshot of timeline section with problematic cards
    console.log('Taking screenshot: timeline-cards - Timeline section cards');
    const timelineElement = await page.evaluateHandle(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.find(section => {
        return section.textContent.includes('Почему 90% компаний теряют деньги');
      });
    });
    
    if (timelineElement) {
      await timelineElement.screenshot({ 
        path: path.join(screenshotsDir, 'timeline-cards.png'),
        type: 'png'
      });
      console.log('✓ Saved: timeline-cards.png');
    }

    // Take screenshot of statistics cards
    console.log('Taking screenshot: stats-cards - Statistics cards section');
    const statsElement = await page.evaluateHandle(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.find(section => {
        const text = section.textContent;
        return text.includes('300%') && text.includes('средний рост прибыли');
      });
    });
    
    if (statsElement) {
      await statsElement.screenshot({ 
        path: path.join(screenshotsDir, 'stats-cards.png'),
        type: 'png'
      });
      console.log('✓ Saved: stats-cards.png');
    }

    // Take screenshot of pricing section
    console.log('Taking screenshot: pricing-cards - Pricing section cards');
    const pricingElement = await page.evaluateHandle(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.find(section => {
        const text = section.textContent;
        return text.includes('Пакеты ИИ-автоматизации') || text.includes('Стартовая автоматизация');
      });
    });
    
    if (pricingElement) {
      await pricingElement.screenshot({ 
        path: path.join(screenshotsDir, 'pricing-cards.png'),
        type: 'png'
      });
      console.log('✓ Saved: pricing-cards.png');
    }

    // Take screenshot of features section with potential text overlap
    console.log('Taking screenshot: features-overlap - Features section');
    const featuresElement = await page.evaluateHandle(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.find(section => {
        return section.textContent.includes('Системный фреймворк экспериментирования');
      });
    });
    
    if (featuresElement) {
      await featuresElement.screenshot({ 
        path: path.join(screenshotsDir, 'features-overlap.png'),
        type: 'png'
      });
      console.log('✓ Saved: features-overlap.png');
    }

    console.log('\n✅ Specific section screenshots completed!');
    console.log(`Screenshots saved to: ${path.resolve(screenshotsDir)}`);

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeSpecificScreenshots();