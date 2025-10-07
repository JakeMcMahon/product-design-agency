import puppeteer from 'puppeteer';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function inspectHTML() {
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
    await page.setViewport({ width: 1280, height: 800 });
    
    await page.setCacheEnabled(false);
    
    console.log('Navigating to website...');
    await page.goto('http://127.0.0.1:8000?t=' + Date.now(), { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    await delay(3000);

    // Find the timeline section and inspect its HTML
    const timelineHTML = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      const timelineSection = sections.find(section => {
        const text = section.textContent;
        return text.includes('Анализ бизнес-процессов') && 
               text.includes('ИИ-решения под ключ') && 
               text.includes('Реальные кейсы');
      });
      
      if (timelineSection) {
        return timelineSection.outerHTML;
      }
      return null;
    });

    if (timelineHTML) {
      console.log('Found timeline section HTML:');
      console.log(timelineHTML.substring(0, 2000) + '...');
      
      // Look specifically for the CardContent classes
      const cardContentClasses = timelineHTML.match(/class="[^"]*CardContent[^"]*"/g);
      console.log('\nCardContent classes found:');
      console.log(cardContentClasses);
    } else {
      console.log('Timeline section not found');
    }

  } catch (error) {
    console.error('Error inspecting HTML:', error);
  } finally {
    await browser.close();
  }
}

inspectHTML();