import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function scrollAndScreenshot() {
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

    // Scroll to find timeline cards section
    console.log('Scrolling to find timeline cards...');
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await delay(500);

    // Find timeline cards by scrolling through the page
    let found = false;
    let scrollAttempts = 0;
    const maxScrollAttempts = 20;

    while (!found && scrollAttempts < maxScrollAttempts) {
      const timelineVisible = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section'));
        const timelineSection = sections.find(section => {
          const text = section.textContent;
          return text.includes('Анализ бизнес-процессов') && 
                 text.includes('ИИ-решения под ключ') && 
                 text.includes('Реальные кейсы');
        });
        
        if (timelineSection) {
          const rect = timelineSection.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }
        return false;
      });

      if (timelineVisible) {
        console.log('Found timeline cards section!');
        
        const timelineElement = await page.evaluateHandle(() => {
          const sections = Array.from(document.querySelectorAll('section'));
          return sections.find(section => {
            const text = section.textContent;
            return text.includes('Анализ бизнес-процессов') && 
                   text.includes('ИИ-решения под ключ') && 
                   text.includes('Реальные кейсы');
          });
        });
        
        if (timelineElement) {
          await timelineElement.screenshot({ 
            path: path.join(screenshotsDir, 'actual-timeline-cards.png'),
            type: 'png'
          });
          console.log('✓ Saved: actual-timeline-cards.png');
        }
        found = true;
      } else {
        await page.evaluate(() => window.scrollBy(0, 400));
        await delay(300);
        scrollAttempts++;
      }
    }

    // Look for stats cards section
    console.log('Looking for stats cards section...');
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await delay(500);

    found = false;
    scrollAttempts = 0;

    while (!found && scrollAttempts < maxScrollAttempts) {
      const statsVisible = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section'));
        const statsSection = sections.find(section => {
          const text = section.textContent;
          return text.includes('300%') && 
                 text.includes('средний рост прибыли') &&
                 text.includes('95%') &&
                 text.includes('24/7');
        });
        
        if (statsSection) {
          const rect = statsSection.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }
        return false;
      });

      if (statsVisible) {
        console.log('Found stats cards section!');
        
        const statsElement = await page.evaluateHandle(() => {
          const sections = Array.from(document.querySelectorAll('section'));
          return sections.find(section => {
            const text = section.textContent;
            return text.includes('300%') && 
                   text.includes('средний рост прибыли') &&
                   text.includes('95%') &&
                   text.includes('24/7');
          });
        });
        
        if (statsElement) {
          await statsElement.screenshot({ 
            path: path.join(screenshotsDir, 'actual-stats-cards.png'),
            type: 'png'
          });
          console.log('✓ Saved: actual-stats-cards.png');
        }
        found = true;
      } else {
        await page.evaluate(() => window.scrollBy(0, 400));
        await delay(300);
        scrollAttempts++;
      }
    }

    // Look for pricing section
    console.log('Looking for pricing section...');
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await delay(500);

    found = false;
    scrollAttempts = 0;

    while (!found && scrollAttempts < maxScrollAttempts) {
      const pricingVisible = await page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('section'));
        const pricingSection = sections.find(section => {
          const text = section.textContent;
          return text.includes('Стартовая автоматизация') && 
                 text.includes('500 тыс ₽') &&
                 text.includes('Комплексная автоматизация');
        });
        
        if (pricingSection) {
          const rect = pricingSection.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        }
        return false;
      });

      if (pricingVisible) {
        console.log('Found pricing section!');
        
        const pricingElement = await page.evaluateHandle(() => {
          const sections = Array.from(document.querySelectorAll('section'));
          return sections.find(section => {
            const text = section.textContent;
            return text.includes('Стартовая автоматизация') && 
                   text.includes('500 тыс ₽') &&
                   text.includes('Комплексная автоматизация');
          });
        });
        
        if (pricingElement) {
          await pricingElement.screenshot({ 
            path: path.join(screenshotsDir, 'actual-pricing-cards.png'),
            type: 'png'
          });
          console.log('✓ Saved: actual-pricing-cards.png');
        }
        found = true;
      } else {
        await page.evaluate(() => window.scrollBy(0, 400));
        await delay(300);
        scrollAttempts++;
      }
    }

    console.log('\n✅ Scrolled screenshots completed!');
    console.log(`Screenshots saved to: ${path.resolve(screenshotsDir)}`);

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

scrollAndScreenshot();