// Captures WebApp screenshots for docs/img. Usage:
//   GRESST_USER=... GRESST_PASS=... npm run capture [-- nombre1 nombre2]
// Needs the WebApp running locally (default http://localhost:5173). Credentials: test account only, never committed.
import { chromium } from 'playwright';
import { mkdirSync, readdirSync, existsSync } from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const BASE = process.env.WEBAPP_URL ?? 'http://localhost:5173';
const USER = process.env.GRESST_USER;
const PASS = process.env.GRESST_PASS;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(HERE, '../docs/img');
// Screens flagged `pii: true` show data of third parties: saved here (git-ignored), never in docs/img.
// Review them, blur with blur-pii.py and move them to docs/img by hand.
const DRAFT = path.resolve(HERE, '../.captures-draft');

// name -> docs/img/webapp-<name>.png. `auth:false` = before login.
const SCREENS = [
  { name: 'login', path: '/login', auth: false },
  { name: 'inicio', path: '/' },
  { name: 'recoleccion', path: '/recoleccion' },
  { name: 'recepcion', path: '/recepcion' },
  { name: 'tratamiento', path: '/treatment-list' },
  { name: 'solicitudes', path: '/administracion-solicitud' },
  { name: 'configuracion-persona', path: '/configuracion-persona', pii: true, blur: ['Identificación', 'Nombre', 'Dirección', 'Teléfono', 'Correo'] },
  { name: 'configuracion-vehiculo', path: '/configuracion-vehiculo' },
  { name: 'usuarios', path: '/cuenta/administrar/usuarios', pii: true, blur: ['Nombre', 'Apellido', 'Correo'] },
  { name: 'residuos', path: '/waste-class-list' },
  // Batch 2: pantallas con interacción. Nunca se guarda nada: solo se abren formularios/paneles/menús.
  { name: 'solicitud-nueva', path: '/request-list/new' },
  { name: 'transporte-ruta', path: '/recoleccion', steps: async (page) => { await page.locator('.ag-row .ag-group-contracted, .ag-row [aria-label*="xpand"]').first().click(); await page.waitForTimeout(600); } },
  { name: 'transporte-menu-fila', path: '/recoleccion', steps: async (page) => { await page.mouse.click(304, 444); await page.waitForTimeout(500); } },
  { name: 'recepcion-agregar-residuo', path: '/recepcion', steps: async (page) => { await page.getByRole('button', { name: /Agregar residuo/ }).first().click(); await page.waitForTimeout(800); } },
  // Batch 3
  { name: 'instalaciones', path: '/facility-list' },
  { name: 'roles', path: '/account-settings/roles' },
  { name: 'trazabilidad', path: '/consulta-trazabilidad' },
  { name: 'tableros', path: '/consulta-dashboard' },
  { name: 'terceros', path: '/third-parties', pii: true },
  { name: 'terceros-menu-fila', path: '/third-parties', pii: true, steps: async (page) => { await page.locator('.ag-row').first().getByRole('button', { name: /acciones|menú|⋮/i }).first().click(); await page.waitForTimeout(500); } },
];

if (!USER || !PASS) throw new Error('Define GRESST_USER y GRESST_PASS (cuenta de prueba).');
const only = process.argv.slice(2);
mkdirSync(OUT, { recursive: true });
mkdirSync(DRAFT, { recursive: true });

// Playwright's cache rotates with other tools: if the pinned build is missing, use any cached Chromium.
function cachedChromium() {
  const dir = path.join(os.homedir(), 'Library/Caches/ms-playwright');
  if (!existsSync(dir)) return undefined;
  const builds = readdirSync(dir).filter((d) => d.startsWith('chromium_headless_shell-')).sort().reverse();
  for (const b of builds) {
    for (const arch of ['chrome-headless-shell-mac-arm64', 'chrome-mac', 'chrome-headless-shell-mac-x64']) {
      const exe = path.join(dir, b, arch, 'chrome-headless-shell');
      const alt = path.join(dir, b, arch, 'headless_shell');
      if (existsSync(exe)) return exe;
      if (existsSync(alt)) return alt;
    }
  }
  return undefined;
}
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? cachedChromium() });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'es-CO', deviceScaleFactor: 1 });
const page = await ctx.newPage();
const shot = async (s) => {
  await page.goto(BASE + s.path, { waitUntil: s.wait ?? 'networkidle' });
  await page.waitForTimeout(800);
  // Hide the "single admin" banner and any hover highlight.
  await page.locator('[role=alert], .app-banner').getByRole('button').first().click({ timeout: 500 }).catch(() => {});
  await page.getByText('Tu cuenta depende de una sola persona').evaluate((el) => (el.closest('[role=alert]') ?? el.parentElement).remove()).catch(() => {});
  if (s.steps) await s.steps(page); // a failing step throws: the screen is NOT saved
  // Blur personal data columns (matched by header text) so docs only show anonymous-looking rows.
  for (const header of s.blur ?? []) {
    const colId = await page.locator('.ag-header-cell').filter({ hasText: header }).first().getAttribute('col-id').catch(() => null);
    if (colId) await page.addStyleTag({ content: `.ag-cell[col-id="${colId}"]{filter:blur(6px)}` });
    else console.warn('no blur target for', header);
  }
  await page.mouse.move(0, 0);
  await page.screenshot({ path: path.join(s.pii ? DRAFT : OUT, `webapp-${s.name}.png`) });
  console.log('ok', s.name);
};
const wanted = (s) => !only.length || only.includes(s.name);

for (const s of SCREENS.filter((s) => s.auth === false && wanted(s))) await shot(s);

await page.goto(BASE + '/login');
await page.fill('#login-username', USER);
await page.fill('#login-password', PASS);
await page.click('button.login-form__submit');
await page.waitForURL((u) => !u.pathname.includes('login'), { timeout: 20000 });

for (const s of SCREENS.filter((s) => s.auth !== false && wanted(s))) {
  try { await shot(s); } catch (e) { console.error('fail', s.name, e.message); }
}
await browser.close();
