import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function freshScreenshot() {
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
    await page.setViewport({ width: 3456, height: 2234 }); // MacBook Pro 16" resolution
    
    // Clear cache and cookies
    await page.setCacheEnabled(false);
    
    console.log('Navigating to website with cache disabled...');
    await page.goto('http://127.0.0.1:8000?t=' + Date.now(), { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(3000);

    const screenshotsDir = './screenshots';
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Find and screenshot timeline cards
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
        console.log('Found timeline cards section with fresh cache!');
        
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
            path: path.join(screenshotsDir, 'fresh-timeline-cards.png'),
            type: 'png'
          });
          console.log('✓ Saved: fresh-timeline-cards.png');
        }
        found = true;
      } else {
        await page.evaluate(() => window.scrollBy(0, 400));
        await delay(300);
        scrollAttempts++;
      }
    }

    console.log('\n✅ Fresh screenshot completed!');

  } catch (error) {
    console.error('Error taking fresh screenshot:', error);
  } finally {
    await browser.close();
  }
}

freshScreenshot();