import { chromium } from 'playwright-core';
const S = process.env.SHOTS;
const only = process.env.ONLY ? process.env.ONLY.split(',') : null;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const pages = [
  ['home', '/', 1440],
  ['produk', '/produk', 1440],
  ['detail', '/produk/advanced-brightening-shower-gel', 1440],
  ['tentang', '/tentang', 1440],
  ['reseller', '/reseller', 1440],
  ['journal', '/journal', 1440],
  ['kontak', '/kontak', 1440],
  ['faq', '/faq', 1440],
  ['brand', '/brand-guideline', 1440],
  ['ds', '/design-system', 1440],
  ['home-mobile', '/', 390],
  ['detail-mobile', '/produk/cherry-muse-lip-cream', 390],
  ['ds-mobile', '/design-system', 390],
];
const errors = [];
for (const [name, path, width] of pages) {
  if (only && !only.includes(name)) continue;
  const ctx = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('console', m => { if (m.type() === 'error') errors.push(`${name}: ${m.text()}`); });
  page.on('pageerror', e => errors.push(`${name}: ${e.message}`));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${name}: ${r.status()} ${r.url()}`); });
  await page.goto('http://localhost:3210' + path, { waitUntil: 'networkidle' });
  // scroll through supaya semua gambar lazy-load ikut ter-render
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${S}/${name}.png`, fullPage: true });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  console.log(name.padEnd(14), 'h=' + await page.evaluate(() => document.body.scrollHeight), overflow ? 'HORIZONTAL-OVERFLOW' : 'ok');
  await ctx.close();
}
await browser.close();
console.log(errors.length ? '--- ISSUES ---\n' + [...new Set(errors)].join('\n') : 'no console/network errors');
