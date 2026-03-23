import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const selector = process.argv[2] || '.advisor';
const label = process.argv[3] || 'section';

const dir = './screenshots';
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || 0)).filter(Boolean);
const n = nums.length ? Math.max(...nums) + 1 : 1;
const out = path.join(dir, `screenshot-${n}-${label}.png`);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

// Scroll slowly to trigger all reveal animations
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 200) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 60));
  }
});

await page.evaluate(sel => {
  document.querySelector(sel)?.scrollIntoView({ block: 'center', behavior: 'instant' });
}, selector);

await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: out });
console.log(`Saved: ${out}`);
await browser.close();
