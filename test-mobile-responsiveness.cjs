#!/usr/bin/env node

/**
 * Mobile Responsiveness Test Script
 * Tests key mobile breakpoints and critical user paths
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const MOBILE_VIEWPORTS = {
  'iPhone SE': { width: 375, height: 667 },
  'iPhone 14 Pro': { width: 390, height: 844 },
  'iPad Pro': { width: 1024, height: 1366 },
  'Desktop': { width: 1920, height: 1080 }
};

const CRITICAL_PATHS = [
  { name: 'Header Navigation', action: 'checkNavigation' },
  { name: 'Hero CTA Buttons', action: 'checkHeroCTAs' },
  { name: 'Pricing Section', action: 'checkPricing' },
  { name: 'Footer Contact', action: 'checkFooter' }
];

async function testMobileResponsiveness() {
  const browser = await puppeteer.launch({ 
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = {};
  
  for (const [deviceName, viewport] of Object.entries(MOBILE_VIEWPORTS)) {
    console.log(`Testing ${deviceName} (${viewport.width}x${viewport.height})`);
    
    const page = await browser.newPage();
    await page.setViewport(viewport);
    
    try {
      await page.goto('http://localhost:8081');
      await page.waitForSelector('header', { timeout: 10000 });
      
      results[deviceName] = await runTests(page, CRITICAL_PATHS);
      
    } catch (error) {
      console.error(`Error testing ${deviceName}:`, error.message);
      results[deviceName] = { error: error.message };
    }
    
    await page.close();
  }
  
  await browser.close();
  
  // Save results
  await fs.writeFile(
    'mobile-test-results.json', 
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n=== MOBILE RESPONSIVENESS TEST RESULTS ===');
  for (const [device, result] of Object.entries(results)) {
    console.log(`\n${device}:`);
    if (result.error) {
      console.log(`  ❌ Error: ${result.error}`);
    } else {
      for (const [test, passed] of Object.entries(result)) {
        console.log(`  ${passed ? '✅' : '❌'} ${test}`);
      }
    }
  }
  
  return results;
}

async function runTests(page, tests) {
  const results = {};
  
  for (const test of tests) {
    try {
      switch (test.action) {
        case 'checkNavigation':
          results[test.name] = await checkNavigation(page);
          break;
        case 'checkHeroCTAs':
          results[test.name] = await checkHeroCTAs(page);
          break;
        case 'checkPricing':
          results[test.name] = await checkPricing(page);
          break;
        case 'checkFooter':
          results[test.name] = await checkFooter(page);
          break;
      }
    } catch (error) {
      console.error(`Test ${test.name} failed:`, error.message);
      results[test.name] = false;
    }
  }
  
  return results;
}

async function checkNavigation(page) {
  // Check if header is visible and not overflowing
  const header = await page.$('header');
  if (!header) return false;
  
  const headerBox = await header.boundingBox();
  const viewport = page.viewport();
  
  // Header should not cause horizontal overflow
  return headerBox.width <= viewport.width;
}

async function checkHeroCTAs(page) {
  // Check if CTA buttons are visible and clickable
  const ctaButtons = await page.$$('button');
  if (ctaButtons.length === 0) return false;
  
  // Check if at least one CTA button is in viewport
  for (const button of ctaButtons) {
    const box = await button.boundingBox();
    if (box && box.x >= 0 && box.y >= 0) {
      return true;
    }
  }
  
  return false;
}

async function checkPricing(page) {
  // Scroll to pricing section and check visibility
  await page.evaluate(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  await page.waitForTimeout(2000);
  
  // Check if pricing cards are visible
  const pricingCards = await page.$$('[class*="pricing"], [class*="card"]');
  return pricingCards.length > 0;
}

async function checkFooter(page) {
  // Scroll to footer and check layout
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  
  await page.waitForTimeout(1000);
  
  const footer = await page.$('footer');
  if (!footer) return false;
  
  const footerBox = await footer.boundingBox();
  const viewport = page.viewport();
  
  // Footer should not cause horizontal overflow
  return footerBox.width <= viewport.width;
}

// Run the test
if (require.main === module) {
  testMobileResponsiveness()
    .then(results => {
      console.log('\nTest completed! Results saved to mobile-test-results.json');
      process.exit(0);
    })
    .catch(error => {
      console.error('Test failed:', error);
      process.exit(1);
    });
}

module.exports = { testMobileResponsiveness };