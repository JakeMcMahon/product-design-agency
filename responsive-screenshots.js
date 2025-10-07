import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Define device sizes for testing
const deviceSizes = [
  { name: 'MacBook Pro 16 inch', width: 1728, height: 1117 },
  { name: 'MacBook Air 13 inch', width: 1440, height: 900 },
  { name: 'iPad Pro (Tablet)', width: 1024, height: 1366 },
  { name: 'iPhone 14 Pro (Mobile)', width: 390, height: 844 },
  { name: 'iPhone SE (Small Mobile)', width: 375, height: 667 }
];

// Define sections to capture
const sections = [
  {
    name: 'timeline-cards',
    selector: 'section',
    contentChecks: ['Анализ бизнес-процессов', 'ИИ-решения под ключ', 'Реальные кейсы']
  },
  {
    name: 'stats-cards',
    selector: 'section',
    contentChecks: ['300%', 'средний рост прибыли', '95%', '24/7']
  },
  {
    name: 'pricing-cards',
    selector: 'section',
    contentChecks: ['Стартовая автоматизация', '500 тыс ₽', 'Комплексная автоматизация']
  },
  {
    name: 'header',
    selector: 'header, nav, [class*="header"]',
    contentChecks: []
  },
  {
    name: 'footer',
    selector: 'footer, [class*="footer"]',
    contentChecks: []
  }
];

async function responsiveScreenshot() {
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
    // Create main screenshots directory
    const mainScreenshotsDir = './responsive-screenshots';
    await fs.mkdir(mainScreenshotsDir, { recursive: true });
    
    console.log('Navigating to website...');
    const page = await browser.newPage();
    
    // Navigate to the development server
    await page.goto('http://localhost:8081', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(2000);

    // Process each device size
    for (const device of deviceSizes) {
      console.log(`\n--- Capturing screenshots for ${device.name} ---`);
      
      // Create directory for this device size
      const deviceDir = path.join(mainScreenshotsDir, device.name.replace(/\s+/g, '-').toLowerCase());
      await fs.mkdir(deviceDir, { recursive: true });
      
      // Set viewport to device size
      await page.setViewport({ width: device.width, height: device.height });
      console.log(`Set viewport to ${device.width}x${device.height}`);
      
      // Take full page screenshot
      const fullPagePath = path.join(deviceDir, 'full-page.png');
      await page.screenshot({ 
        path: fullPagePath,
        fullPage: true,
        type: 'png'
      });
      console.log(`✓ Saved full page screenshot: ${fullPagePath}`);
      
      // Scroll to find and capture specific sections
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      await delay(500);
      
      // Capture each section
      for (const section of sections) {
        let found = false;
        let scrollAttempts = 0;
        const maxScrollAttempts = 20;
        
        while (!found && scrollAttempts < maxScrollAttempts) {
          const sectionVisible = await page.evaluate((selector, contentChecks) => {
            const elements = Array.from(document.querySelectorAll(selector));
            const targetElement = elements.find(element => {
              const text = element.textContent || '';
              // If no content checks specified, just find the first element matching selector
              if (contentChecks.length === 0) {
                return element.offsetParent !== null; // Check if element is visible
              }
              // Otherwise check for specific content
              return contentChecks.every(check => text.includes(check));
            });
            
            if (targetElement) {
              const rect = targetElement.getBoundingClientRect();
              return rect.top < window.innerHeight && rect.bottom > 0;
            }
            return false;
          }, section.selector, section.contentChecks);
          
          if (sectionVisible) {
            console.log(`Found ${section.name} section!`);
            
            const sectionElement = await page.evaluateHandle((selector, contentChecks) => {
              const elements = Array.from(document.querySelectorAll(selector));
              return elements.find(element => {
                const text = element.textContent || '';
                // If no content checks specified, just find the first element matching selector
                if (contentChecks.length === 0) {
                  return element.offsetParent !== null; // Check if element is visible
                }
                // Otherwise check for specific content
                return contentChecks.every(check => text.includes(check));
              });
            }, section.selector, section.contentChecks);
            
            if (sectionElement) {
              try {
                const sectionPath = path.join(deviceDir, `${section.name}.png`);
                await sectionElement.screenshot({ 
                  path: sectionPath,
                  type: 'png'
                });
                console.log(`✓ Saved ${section.name} screenshot: ${sectionPath}`);
              } catch (err) {
                console.log(`⚠ Could not capture screenshot for ${section.name}: ${err.message}`);
              }
            }
            found = true;
          } else {
            await page.evaluate(() => window.scrollBy(0, 400));
            await delay(300);
            scrollAttempts++;
          }
        }
        
        if (!found) {
          console.log(`⚠ Could not find ${section.name} section after scrolling`);
        }
        
        // Reset scroll position for next section
        await page.evaluate(() => {
          window.scrollTo(0, 0);
        });
        await delay(500);
      }
    }
    
    console.log('\n✅ Responsive screenshots completed!');
    console.log(`Screenshots saved to: ${path.resolve(mainScreenshotsDir)}`);
    
  } catch (error) {
    console.error('Error taking responsive screenshots:', error);
  } finally {
    await browser.close();
  }
}

responsiveScreenshot();