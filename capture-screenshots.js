const { chromium } = require("playwright");

const viewports = [
  { name: "320px", width: 320, height: 800 },
  { name: "375px", width: 375, height: 800 },
  { name: "425px", width: 425, height: 850 },
  { name: "768px", width: 768, height: 1024 },
  { name: "1024px", width: 1024, height: 768 },
  { name: "1440px", width: 1440, height: 900 },
  { name: "1920px", width: 1920, height: 1080 },
];

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(5000);

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshot-${viewport.name}.png`, fullPage: true });
    console.log(`Captured ${viewport.name}`);
  }

  await browser.close();
}

captureScreenshots().catch(console.error);