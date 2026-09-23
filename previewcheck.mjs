import { chromium } from 'playwright-core';
const BASE = 'http://localhost:3211/preview/abc123/';
const S = process.env.SHOTS; // opsional: folder screenshot
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
const bad = [];
p.on('console', m => { if (m.type() === 'error') bad.push('console: ' + m.text().slice(0, 120)); });
p.on('pageerror', e => bad.push('pageerror: ' + e.message.slice(0, 120)));
p.on('response', r => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url().replace(BASE, '')}`); });

await p.goto(BASE, { waitUntil: 'networkidle' });
await p.evaluate(async () => { const st = innerHeight * 0.8; for (let y = 0; y < document.body.scrollHeight; y += st) { scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } scrollTo(0, 0); });
await p.waitForLoadState('networkidle');
await p.waitForTimeout(600);
const styled = await p.evaluate(() => getComputedStyle(document.body).backgroundColor);
const fontOk = await p.evaluate(() => getComputedStyle(document.querySelector('h1')).fontFamily);
const imgOk = await p.evaluate(() => [...document.images].filter(i => i.naturalWidth === 0).length);
console.log('home bg      :', styled);
console.log('h1 font      :', fontOk.slice(0, 60));
console.log('broken imgs  :', imgOk);

// navigasi: klik menu Produk
await p.click('header nav a:has-text("Produk")');
await p.waitForLoadState('networkidle');
console.log('after nav    :', p.url().replace(BASE, '→ '));
console.log('produk cards :', await p.locator('article').count());

// klik produk pertama
await p.click('article a[href*="produk/"]');
await p.waitForLoadState('networkidle');
console.log('detail url   :', p.url().replace(BASE, '→ '));
console.log('detail h1    :', (await p.locator('h1').first().textContent())?.trim());

// interaktivitas: buka FAQ accordion di halaman FAQ
await p.goto(BASE + 'faq/', { waitUntil: 'networkidle' });
const btn = p.locator('button:has-text("Aman dipakai untuk kulit sensitif?")');
const before = await btn.getAttribute('aria-expanded');
await btn.click();
await p.waitForTimeout(400);
const after = await btn.getAttribute('aria-expanded');
const answer = await p.locator('text=Rangkaian body care kami diformulasikan lembut').count();
console.log('accordion    :', before, '→', after, '| jawaban tampil:', answer);
console.log('react        :', after === 'true' && answer > 0 ? 'HIDUP' : 'MATI');
if (S) await p.screenshot({ path: `${S}/preview-home.png` });
await b.close();
console.log(bad.length ? 'ISSUES:\n' + [...new Set(bad)].slice(0, 10).join('\n') : 'no console/network errors');
