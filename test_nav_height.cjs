const { chromium } = require('playwright');
const { spawn } = require('child_process');

(async () => {
  const server = spawn('npm', ['run', 'preview'], { cwd: process.cwd() });
  await new Promise(r => setTimeout(r, 2000));

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4173');
  
  const navHeightBefore = await page.evaluate(() => document.querySelector('.card-nav').offsetHeight);
  console.log('Nav height before click:', navHeightBefore);
  
  await page.click('.hamburger-menu');
  await new Promise(r => setTimeout(r, 1000));
  
  const navHeightAfter = await page.evaluate(() => document.querySelector('.card-nav').offsetHeight);
  console.log('Nav height after click:', navHeightAfter);
  
  const navContentVisible = await page.evaluate(() => {
    const el = document.querySelector('.card-nav-content');
    return window.getComputedStyle(el).visibility;
  });
  console.log('Nav content visibility:', navContentVisible);
  
  await browser.close();
  server.kill();
})();
