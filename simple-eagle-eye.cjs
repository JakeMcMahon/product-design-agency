const puppeteer = require('puppeteer');

async function simpleAnalysis() {
  console.log('🔍 Starting Simple Eagle Eye Analysis...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // MacBook Pro 16" viewport
  await page.setViewport({ 
    width: 1728, // Half of 3456 for proper rendering
    height: 1117  // Half of 2234
  });

  try {
    await page.goto('http://209.38.85.211:8000', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📸 Capturing current site...');
    await page.screenshot({ 
      path: 'screenshots/current-site-analysis.png',
      fullPage: true
    });

    console.log('📸 Capturing above fold...');
    await page.screenshot({ 
      path: 'screenshots/current-above-fold.png',
      clip: { x: 0, y: 0, width: 1728, height: 1117 }
    });

    console.log('✅ Screenshots captured successfully!');

  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  } finally {
    await browser.close();
  }
}

simpleAnalysis();