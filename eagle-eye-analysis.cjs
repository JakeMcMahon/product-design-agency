const puppeteer = require('puppeteer');
const fs = require('fs');

async function eagleEyeDesignAnalysis() {
  console.log('🔍 Starting Eagle Eye Design Analysis...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  
  // MacBook Pro 16" viewport (actual resolution)
  await page.setViewport({ 
    width: 3456, 
    height: 2234,
    deviceScaleFactor: 2
  });

  try {
    console.log('📱 Navigating to site...');
    await page.goto('http://209.38.85.211:8000', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for any animations/dynamic content
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('📸 Capturing full site overview...');
    await page.screenshot({ 
      path: 'screenshots/eagle-eye-full-site.png',
      fullPage: true
    });

    console.log('📸 Capturing above-fold analysis...');
    await page.screenshot({ 
      path: 'screenshots/eagle-eye-above-fold.png',
      clip: { x: 0, y: 0, width: 3456, height: 2234 }
    });

    // Capture each major section for detailed analysis
    const sections = [
      { name: 'hero', selector: '[data-section="hero"], .hero-section, section:first-child' },
      { name: 'features', selector: '[data-section="features"], .features-section' },
      { name: 'pricing', selector: '[data-section="pricing"], .pricing-section' },
      { name: 'testimonials', selector: '[data-section="testimonials"], .testimonials-section' },
      { name: 'footer', selector: 'footer, [data-section="footer"]' }
    ];

    for (const section of sections) {
      try {
        const element = await page.$(section.selector);
        if (element) {
          console.log(`📸 Capturing ${section.name} section...`);
          await element.screenshot({ 
            path: `screenshots/eagle-eye-${section.name}.png`
          });
        }
      } catch (error) {
        console.log(`⚠️ Could not capture ${section.name} section: ${error.message}`);
      }
    }

    // Analyze critical UX metrics
    console.log('🔍 Analyzing UX metrics...');
    
    const analysis = await page.evaluate(() => {
      const metrics = {
        ctaButtons: [],
        headingHierarchy: [],
        colorContrast: [],
        interactiveElements: [],
        spacingIssues: [],
        visualHierarchy: []
      };

      // Analyze CTA buttons
      const buttons = document.querySelectorAll('button, .btn, [role="button"]');
      buttons.forEach((btn, index) => {
        const styles = window.getComputedStyle(btn);
        metrics.ctaButtons.push({
          index,
          text: btn.textContent?.trim().substring(0, 50),
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          fontSize: styles.fontSize,
          padding: styles.padding,
          position: btn.getBoundingClientRect()
        });
      });

      // Analyze heading hierarchy
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        const headings = document.querySelectorAll(tag);
        headings.forEach((heading, index) => {
          const styles = window.getComputedStyle(heading);
          metrics.headingHierarchy.push({
            tag,
            index,
            text: heading.textContent?.trim().substring(0, 100),
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            color: styles.color,
            marginTop: styles.marginTop,
            marginBottom: styles.marginBottom
          });
        });
      });

      // Analyze interactive elements
      const interactive = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
      interactive.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const styles = window.getComputedStyle(el);
        metrics.interactiveElements.push({
          index,
          tagName: el.tagName,
          width: rect.width,
          height: rect.height,
          hasOutline: styles.outline !== 'none',
          hasFocusVisible: el.matches(':focus-visible'),
          text: el.textContent?.trim().substring(0, 30)
        });
      });

      return metrics;
    });

    // Save analysis results
    fs.writeFileSync('eagle-eye-analysis-results.json', JSON.stringify(analysis, null, 2));
    
    console.log('✅ Eagle Eye Analysis Complete!');
    console.log('📊 Results saved to eagle-eye-analysis-results.json');
    console.log('📸 Screenshots saved to screenshots/ directory');

  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  } finally {
    await browser.close();
  }
}

eagleEyeDesignAnalysis();