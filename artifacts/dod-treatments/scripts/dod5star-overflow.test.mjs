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

  async pressKey(key, modifiers = 0) {
    const windowsVirtualKeyCode = {
      ArrowRight: 39,
      Escape: 27,
      Enter: 13,
      Tab: 9,
      ' ': 32,
    }[key];
    const code = key === ' ' ? 'Space' : key;
    const activatesControl = key === 'Enter' || key === ' ';
    if (modifiers & 8) {
      await this.send('Input.dispatchKeyEvent', {
        type: 'rawKeyDown',
        key: 'Shift',
        code: 'ShiftLeft',
        windowsVirtualKeyCode: 16,
        modifiers: 8,
      });
    }
    await this.send('Input.dispatchKeyEvent', {
      type: activatesControl ? 'keyDown' : 'rawKeyDown',
      key,
      code,
      windowsVirtualKeyCode,
      ...(activatesControl ? { text: key === 'Enter' ? '\r' : ' ', unmodifiedText: key === 'Enter' ? '\r' : ' ' } : {}),
      modifiers,
    });
    await this.send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key,
      code,
      windowsVirtualKeyCode,
      modifiers,
    });
    if (modifiers & 8) {
      await this.send('Input.dispatchKeyEvent', {
        type: 'keyUp',
        key: 'Shift',
        code: 'ShiftLeft',
        windowsVirtualKeyCode: 16,
      });
    }
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
  const page = new DevToolsPage(socket);
  await page.send('Page.bringToFront');
  return page;
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

async function inspectElementBounds(page, selector) {
  return page.evaluate(`(() => {
    const viewportWidth = window.innerWidth;
    const root = document.querySelector(${JSON.stringify(selector)});
    if (!root) return null;
    const elements = [root, ...root.querySelectorAll('*')];
    const offenders = elements
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          testId: element.getAttribute('data-testid'),
          text: element.textContent?.trim().slice(0, 80) ?? '',
          left: Math.round(rect.left * 100) / 100,
          right: Math.round(rect.right * 100) / 100,
          width: Math.round(rect.width * 100) / 100,
        };
      })
      .filter(({ left, right, width }) => width > 0 && (left < -0.5 || right > viewportWidth + 0.5));
    const rect = root.getBoundingClientRect();
    return {
      bounds: { left: rect.left, right: rect.right },
      offenders: offenders.slice(0, 8),
    };
  })()`);
}

async function inspectPlannerFocus(page) {
  return page.evaluate(`(() => {
    const dialog = document.querySelector('[data-testid="therapy-planner-dialog"]');
    const active = document.activeElement;
    return {
      dialogOpen: dialog !== null,
      focusInsideDialog: dialog?.contains(active) ?? false,
      activeTestId: active?.getAttribute('data-testid') ?? null,
      activeRole: active?.getAttribute('role') ?? null,
    };
  })()`);
}

async function waitForCondition(page, expression, label, timeoutMs = 2_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await page.evaluate(expression)) return;
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
  throw new Error(`Timed out waiting for ${label}`);
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

test('therapy planner dialog and every tab stay within narrow viewports', { timeout: 90_000 }, async (t) => {
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

  const route = '/clinics/ixtapa-zihuatanejo/treatments';
  const tabs = [
    'therapy-tab-therapies',
    'therapy-tab-nutraceutical-support',
    'therapy-tab-diet-nutrition',
  ];

  for (const width of viewportWidths) {
    await page.send('Emulation.setDeviceMetricsOverride', {
      width,
      height: 844,
      deviceScaleFactor: 1,
      mobile: false,
    });

    const targetUrl = `http://127.0.0.1:${appPort}${route}?dialog-overflow-test=${width}`;
    await page.send('Page.navigate', { url: targetUrl });
    await waitForRetreatDocument(page, targetUrl);
    await page.evaluate(`document.querySelector('[data-testid="button-view-sample-protocol"]').focus()`);
    await page.pressKey('Enter');
    await waitForCondition(
      page,
      `document.querySelector('[data-testid="therapy-planner-dialog"]') !== null`,
      `therapy planner to open at ${width}px`,
    );

    const openingFocus = await inspectPlannerFocus(page);
    assert.equal(
      openingFocus.focusInsideDialog,
      true,
      `opening the therapy planner did not move focus into the dialog at ${width}px: ${JSON.stringify(openingFocus)}`,
    );
    await page.evaluate(`new Promise((resolve) => setTimeout(resolve, 250))`);

    await page.evaluate(`document.querySelector('[data-testid="${tabs[0]}"]').focus()`);
    for (const tab of tabs.slice(1)) {
      await page.pressKey('ArrowRight');
      await waitForCondition(
        page,
        `document.querySelector('[role="tab"][data-state="active"]')?.getAttribute('data-testid') === ${JSON.stringify(tab)}`,
        `ArrowRight to select ${tab} at ${width}px`,
      );
      const selectedTab = await page.evaluate(
        `document.querySelector('[role="tab"][data-state="active"]')?.getAttribute('data-testid')`,
      );
      assert.equal(selectedTab, tab, `ArrowRight did not select ${tab} at ${width}px`);
      const tabFocus = await inspectPlannerFocus(page);
      assert.equal(tabFocus.activeTestId, tab, `ArrowRight did not move focus to ${tab} at ${width}px`);
    }

    for (const control of ['therapy-panel-diet-nutrition', 'link-dod-4-pillar', 'link-discuss-protocol', 'dialog-close', tabs.at(-1)]) {
      await page.pressKey('Tab');
      await waitForCondition(
        page,
        `document.activeElement?.getAttribute('data-testid') === ${JSON.stringify(control)}`,
        `Tab to move focus to ${control} at ${width}px`,
      );
      const tabFocus = await inspectPlannerFocus(page);
      assert.equal(
        tabFocus.focusInsideDialog,
        true,
        `Tab allowed focus to escape the therapy planner at ${width}px: ${JSON.stringify(tabFocus)}`,
      );
    }
    await page.pressKey('Tab', 8);
    await waitForCondition(
      page,
      `document.activeElement?.getAttribute('data-testid') === 'dialog-close'`,
      `Shift+Tab to wrap focus to the close control at ${width}px`,
    );

    for (const tab of tabs) {
      await page.evaluate(`document.querySelector('[data-testid="${tab}"]').click()`);
      const dialog = await inspectElementBounds(page, '[data-testid="therapy-planner-dialog"]');
      assert.ok(dialog, `therapy planner dialog did not open at ${width}px`);
      assert.ok(
        dialog.bounds.left >= 0 && dialog.bounds.right <= width,
        `therapy planner dialog is outside ${width}px viewport: ${JSON.stringify(dialog.bounds)}`,
      );
      assert.deepEqual(
        dialog.offenders,
        [],
        `${tab} has content outside ${width}px viewport: ${JSON.stringify(dialog.offenders)}`,
      );
    }

    for (const control of ['therapy-planner-tabs', 'dialog-close', 'link-discuss-protocol']) {
      const bounds = await inspectElementBounds(page, `[data-testid="${control}"]`);
      assert.ok(bounds, `${control} was not found at ${width}px`);
      assert.deepEqual(
        bounds.offenders,
        [],
        `${control} is outside ${width}px viewport: ${JSON.stringify(bounds.offenders)}`,
      );
    }

    await page.evaluate(`document.querySelector('[data-testid="dialog-close"]').focus()`);
    await page.pressKey('Enter');
    await waitForCondition(
      page,
      `document.querySelector('[data-testid="therapy-planner-dialog"]') === null`,
      `close control to close the therapy planner at ${width}px`,
    );
    assert.equal(
      await page.evaluate(`document.activeElement?.getAttribute('data-testid')`),
      'button-view-sample-protocol',
      `the close control did not return focus to the therapy planner trigger at ${width}px`,
    );

    await page.pressKey(' ');
    await waitForCondition(
      page,
      `document.querySelector('[data-testid="therapy-planner-dialog"]') !== null`,
      `therapy planner to reopen at ${width}px`,
    );
    await page.pressKey('Escape');
    await waitForCondition(
      page,
      `document.querySelector('[data-testid="therapy-planner-dialog"]') === null`,
      `Escape to close the therapy planner at ${width}px`,
    );
    assert.equal(
      await page.evaluate(`document.activeElement?.getAttribute('data-testid')`),
      'button-view-sample-protocol',
      `Escape did not return focus to the therapy planner trigger at ${width}px`,
    );
  }
});