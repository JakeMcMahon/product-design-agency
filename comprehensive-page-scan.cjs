const puppeteer = require('puppeteer');

async function comprehensivePageScan() {
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

    // Get full page height
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log(`📏 Full page height: ${pageHeight}px`);

    // Capture overlapping sections to ensure we don't miss anything
    const sections = [
      { name: 'hero-stats', y: 800, height: 800 },
      { name: 'video-section', y: 1400, height: 800 },
      { name: 'features-start', y: 2000, height: 800 },
      { name: 'features-middle', y: 2600, height: 800 },
      { name: 'testimonials', y: 3200, height: 800 },
      { name: 'pricing-first', y: 3800, height: 800 },
      { name: 'pricing-second', y: 4400, height: 800 },
      { name: 'process-timeline', y: 5000, height: 800 },
      { name: 'cta-footer', y: 5600, height: 800 },
      { name: 'final-section', y: 6200, height: 800 }
    ];

    for (const section of sections) {
      if (section.y < pageHeight) {
        console.log(`📸 Capturing ${section.name} section...`);
        try {
          await page.screenshot({ 
            path: `screenshots/scan-${section.name}.png`,
            clip: { x: 0, y: section.y, width: 1728, height: section.height }
          });
        } catch (e) { 
          console.log(`⚠️ Could not capture ${section.name}: ${e.message}`); 
        }
      }
    }

    console.log('✅ Comprehensive page scan completed!');
    console.log('📁 Check screenshots/scan-*.png files for all sections');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

comprehensivePageScan();