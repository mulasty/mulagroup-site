const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
  });
  await page.goto('file:///C:/Users/uwpar/mulagroup-site/public/og-image.html');
  await page.screenshot({
    path: 'C:/Users/uwpar/mulagroup-site/public/og-image.png',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await browser.close();
  console.log('OG image generated at public/og-image.png');
})();
