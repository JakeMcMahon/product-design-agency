import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Define device sizes for testing
const deviceSizes = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 14 Pro', width: 390, height: 844 },
  { name: 'iPad Pro', width: 1024, height: 1366 }
];

async function mobileScreenshot() {
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
    const mainScreenshotsDir = './mobile-screenshots';
    await fs.mkdir(mainScreenshotsDir, { recursive: true });
    
    console.log('Navigating to website...');
    const page = await browser.newPage();
    
    // Navigate to the local development server
    await page.goto('http://localhost:8080', { 
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
      
      // Scroll through the page and take section screenshots
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      await delay(500);
      
      // Take screenshots at different scroll positions
      const pageHeight = await page.evaluate(() => document.body.scrollHeight);
      const viewportHeight = device.height;
      const scrollSteps = Math.ceil(pageHeight / viewportHeight);
      
      for (let i = 0; i <= scrollSteps; i++) {
        const scrollPosition = Math.min(i * viewportHeight, pageHeight - viewportHeight);
        await page.evaluate((pos) => {
          window.scrollTo(0, pos);
        }, scrollPosition);
        await delay(300);
        
        const sectionPath = path.join(deviceDir, `section-${i + 1}.png`);
        await page.screenshot({ 
          path: sectionPath,
          type: 'png'
        });
        console.log(`✓ Saved section screenshot: ${sectionPath}`);
      }
    }
    
    console.log('\n✅ Mobile screenshots completed!');
    console.log(`Screenshots saved to: ${path.resolve(mainScreenshotsDir)}`);
    
  } catch (error) {
    console.error('Error taking mobile screenshots:', error);
  } finally {
    await browser.close();
  }
}

mobileScreenshot();