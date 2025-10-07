import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshots() {
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  console.log('Launching browser...');
  
  // Launch browser with root user workaround
  const browser = await puppeteer.launch({
    headless: 'new',
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
    
    // Set desktop viewport
    await page.setViewport({ 
      width: 1920, 
      height: 1080,
      deviceScaleFactor: 1
    });

    const baseUrl = 'http://localhost:8000';
    
    console.log('Navigating to website...');
    await page.goto(baseUrl, { waitUntil: 'networkidle2' });
    
    // Wait for animations and content to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Define sections to screenshot
    const sections = [
      {
        name: '01-hero-section',
        description: 'Hero section with main heading and CTA',
        action: async () => {
          // Scroll to top
          await page.evaluate(() => window.scrollTo(0, 0));
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      },
      {
        name: '02-features-section-header',
        description: 'Features section header with team credentials',
        action: async () => {
          await page.evaluate(() => {
            const element = document.querySelector('section:nth-of-type(2)');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '03-team-showcase',
        description: 'Team member profiles and credentials',
        action: async () => {
          await page.evaluate(() => {
            const teamSection = document.querySelector('[alt="Jake McMahon profile photo"]')?.closest('.grid');
            if (teamSection) teamSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '04-ai-machine-learning-section',
        description: 'Advanced AI and Machine Learning section',
        action: async () => {
          await page.evaluate(() => {
            const aiSection = Array.from(document.querySelectorAll('h2')).find(el => 
              el.textContent.includes('ИИ и машинное'));
            if (aiSection) aiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '05-business-analytics-section',
        description: 'Business Analytics and Experimentation section',
        action: async () => {
          await page.evaluate(() => {
            const analyticsSection = Array.from(document.querySelectorAll('h2')).find(el => 
              el.textContent.includes('Бизнес-аналитика'));
            if (analyticsSection) analyticsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '06-business-growth-section',
        description: 'Business Growth Engineering section',
        action: async () => {
          await page.evaluate(() => {
            const growthSection = Array.from(document.querySelectorAll('h2')).find(el => 
              el.textContent.includes('Инженерия бизнес-роста'));
            if (growthSection) growthSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '07-implementation-philosophy-section',
        description: 'Implementation Philosophy section',
        action: async () => {
          await page.evaluate(() => {
            const implSection = Array.from(document.querySelectorAll('h2')).find(el => 
              el.textContent.includes('Философия внедрения'));
            if (implSection) implSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '08-ai-automation-philosophy-section',
        description: 'AI Automation Philosophy section',
        action: async () => {
          await page.evaluate(() => {
            const autoSection = Array.from(document.querySelectorAll('h2')).find(el => 
              el.textContent.includes('Философия ИИ-автоматизации'));
            if (autoSection) autoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: '09-full-page-overview',
        description: 'Full page overview',
        action: async () => {
          // Take full page screenshot
          await page.evaluate(() => window.scrollTo(0, 0));
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    ];

    // Take screenshots of each section
    for (const section of sections) {
      console.log(`Taking screenshot: ${section.name} - ${section.description}`);
      
      // Execute the scroll action
      await section.action();
      
      // Take screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${section.name}.png`),
        fullPage: section.name.includes('full-page')
      });
      
      console.log(`✓ Saved: ${section.name}.png`);
    }

    console.log('\n✅ All screenshots completed successfully!');
    console.log(`Screenshots saved to: ${screenshotsDir}`);
    
    // List all created files
    const files = fs.readdirSync(screenshotsDir);
    console.log('\nScreenshots created:');
    files.forEach(file => console.log(`- ${file}`));

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

// Run the screenshot function
takeScreenshots().catch(console.error);