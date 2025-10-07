const puppeteer = require('puppeteer');

async function findCardSections() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1728, height: 1117 });

  try {
    await page.goto('http://209.38.85.211:8000', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshots of potential card sections
    console.log('📸 Capturing testimonials/results section...');
    try {
      await page.screenshot({ 
        path: 'screenshots/testimonials-cards.png',
        clip: { x: 0, y: 2500, width: 1728, height: 800 }
      });
    } catch (e) { console.log('Could not capture testimonials'); }

    console.log('📸 Capturing process/timeline section...');
    try {
      await page.screenshot({ 
        path: 'screenshots/process-cards.png',
        clip: { x: 0, y: 3500, width: 1728, height: 800 }
      });
    } catch (e) { console.log('Could not capture process'); }

    console.log('📸 Capturing services/offerings section...');
    try {
      await page.screenshot({ 
        path: 'screenshots/services-cards.png',
        clip: { x: 0, y: 4500, width: 1728, height: 800 }
      });
    } catch (e) { console.log('Could not capture services'); }

    console.log('📸 Capturing footer section...');
    try {
      await page.screenshot({ 
        path: 'screenshots/footer-section.png',
        clip: { x: 0, y: 6000, width: 1728, height: 800 }
      });
    } catch (e) { console.log('Could not capture footer'); }

    console.log('✅ Card sections captured!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

findCardSections();