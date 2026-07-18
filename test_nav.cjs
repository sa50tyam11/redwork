const { chromium } = require('playwright');
const { spawn } = require('child_process');

(async () => {
  const server = spawn('npm', ['run', 'preview'], { cwd: process.cwd() });
  
  // wait for server to start
  await new Promise(r => setTimeout(r, 2000));

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err));

  await page.goto('http://localhost:4173');
  
  console.log('Navigated to page');
  
  const hamburger = await page.$('.hamburger-menu');
  if (hamburger) {
    console.log('Found hamburger menu, clicking...');
    await hamburger.click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'nav_open.png' });
    console.log('Screenshot saved to nav_open.png');
  } else {
    console.log('Hamburger menu not found');
  }
  
  await browser.close();
  server.kill();
})();
