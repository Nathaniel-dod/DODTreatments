import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import test from 'node:test';

const retreatRoutes = [
  '/clinics/ixtapa-zihuatanejo',
  '/clinics/ixtapa-zihuatanejo/residence',
  '/clinics/ixtapa-zihuatanejo/treatments',
  '/clinics/ixtapa-zihuatanejo/team',
  '/clinics/ixtapa-zihuatanejo/inquire',
  '/clinics/ixtapa-zihuatanejo/location',
];
const viewportWidths = [390, 360, 320];
const chromiumPath = process.env.CHROMIUM_PATH ?? '/repl/tools/bin/chromium';

async function availablePort() {
  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert.ok(address && typeof address === 'object');
  const port = address.port;
  server.close();
  await once(server, 'close');
  return port;
}

async function waitForUrl(url, label, timeoutMs = 20_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(`Timed out waiting for ${label}: ${lastError}`);
}

class DevToolsPage {
  #id = 0;
  #pending = new Map();

  constructor(socket) {
    this.socket = socket;
    socket.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);
      if (!message.id) return;
      const pending = this.#pending.get(message.id);
      if (!pending) return;
      this.#pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }

  async send(method, params = {}) {
    const id = ++this.#id;
    const response = new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
    });
    this.socket.send(JSON.stringify({ id, method, params }));
    return response;
  }

  async evaluate(expression) {
    const result = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.text);
    }
    return result.result.value;
  }

  close() {
    this.socket.close();
  }
}

async function openPage(debugPort) {
  const response = await fetch(`http://127.0.0.1:${debugPort}/json/new?about:blank`, {
    method: 'PUT',
  });
  assert.ok(response.ok, `Chromium target creation failed: ${response.status}`);
  const target = await response.json();
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await once(socket, 'open');
  return new DevToolsPage(socket);
}

async function inspectOverflow(page) {
  return page.evaluate(`(() => {
    const root = document.documentElement;
    const viewportWidth = window.innerWidth;
    const scrollWidth = Math.max(root.scrollWidth, document.body?.scrollWidth ?? 0);
    const offenders = [...document.querySelectorAll('body *')]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id,
          className: typeof element.className === 'string' ? element.className : '',
          left: Math.round(rect.left * 100) / 100,
          right: Math.round(rect.right * 100) / 100,
          width: Math.round(rect.width * 100) / 100,
        };
      })
      .filter(({ left, right, width }) => width > 0 && (left < -0.5 || right > viewportWidth + 0.5))
      .slice(0, 8);
    return { viewportWidth, scrollWidth, offenders };
  })()`);
}

async function waitForRetreatDocument(page, targetUrl, timeoutMs = 10_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const isReady = await page.evaluate(`(() => (
        window.location.href === ${JSON.stringify(targetUrl)}
        && document.readyState === 'complete'
        && document.querySelector('[aria-controls="dod5star-mobile-menu"]') !== null
      ))()`);
      if (isReady) {
        await page.evaluate('document.fonts.ready');
        return;
      }
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 25));
  }

  throw new Error(`Timed out waiting for retreat route ${targetUrl}: ${lastError ?? 'document did not become ready'}`);
}

test('DOD5Star retreat routes and mobile menu stay within narrow viewports', { timeout: 90_000 }, async (t) => {
  const appPort = await availablePort();
  const debugPort = await availablePort();
  const app = spawn('pnpm', ['exec', 'vite', '--config', 'vite.config.ts', '--host', '127.0.0.1'], {
    cwd: new URL('..', import.meta.url),
    env: { ...process.env, PORT: String(appPort), NODE_ENV: 'test' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const chromium = spawn(chromiumPath, [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    `--remote-debugging-port=${debugPort}`,
    '--remote-debugging-address=127.0.0.1',
    'about:blank',
  ], { stdio: ['ignore', 'pipe', 'pipe'] });

  t.after(() => {
    app.kill('SIGTERM');
    chromium.kill('SIGTERM');
  });

  await Promise.all([
    waitForUrl(`http://127.0.0.1:${appPort}`, 'Vite'),
    waitForUrl(`http://127.0.0.1:${debugPort}/json/version`, 'Chromium'),
  ]);

  const page = await openPage(debugPort);
  t.after(() => page.close());

  for (const width of viewportWidths) {
    await page.send('Emulation.setDeviceMetricsOverride', {
      width,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true,
    });

    for (const [routeIndex, route] of retreatRoutes.entries()) {
      const targetUrl = `http://127.0.0.1:${appPort}${route}?overflow-test=${width}-${routeIndex}`;
      await page.send('Page.navigate', { url: targetUrl });
      await waitForRetreatDocument(page, targetUrl);

      const closedMenu = await inspectOverflow(page);
      assert.equal(
        closedMenu.scrollWidth,
        closedMenu.viewportWidth,
        `${route} overflows at ${width}px: ${JSON.stringify(closedMenu.offenders)}`,
      );

      await page.evaluate(`document.querySelector('[aria-controls="dod5star-mobile-menu"]').click()`);
      const openMenu = await inspectOverflow(page);
      const menuBounds = await page.evaluate(`(() => {
        const rect = document.querySelector('#dod5star-mobile-menu').getBoundingClientRect();
        return { left: rect.left, right: rect.right };
      })()`);

      assert.equal(
        openMenu.scrollWidth,
        openMenu.viewportWidth,
        `${route} open menu overflows at ${width}px: ${JSON.stringify(openMenu.offenders)}`,
      );
      assert.ok(
        menuBounds.left >= 0 && menuBounds.right <= width,
        `${route} mobile menu is outside ${width}px viewport: ${JSON.stringify(menuBounds)}`,
      );
    }
  }
});