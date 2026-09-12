import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9223;
const OUT_DIR = "/Users/sirwagyashekhar/.gemini/antigravity-ide/brain/230919de-bec9-4b5a-9e94-65eea9b00173";

async function capture() {
  const profileDir = `/tmp/chrome_snap_${Date.now()}`;
  const chromeProc = spawn(CHROME, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${PORT}`,
    '--window-size=1440,900',
    'http://127.0.0.1:5173/'
  ]);

  try {
    await new Promise(r => setTimeout(r, 1200));

    const list = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${PORT}/json`, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = list.find(t => t.type === 'page');
    if (!page) {
      console.log('No page found');
      chromeProc.kill();
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id = 1;
    const send = (method, params = {}) => new Promise(res => {
      const msgId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === msgId) {
          ws.removeEventListener('message', handler);
          res(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    await new Promise(res => { ws.onopen = res; });

    // Wait for splash animation to complete and GSAP hero reveal to finish
    // Splash takes ~1.8s, hero reveal takes ~1.2s -> wait 3.5s
    console.log('Waiting for splash + hero animation...');
    await new Promise(r => setTimeout(r, 5500));

    // Log rects
    const rectsRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const getR = sel => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { sel, left: Math.round(r.left), right: Math.round(r.right), top: Math.round(r.top), bottom: Math.round(r.bottom), width: Math.round(r.width), height: Math.round(r.height) };
        };
        return JSON.stringify({
          box: getR('.hero-framed-nameplate'),
          role: getR('.pill-role'),
          arrowLeft: getR('.arrow-to-box-left'),
          status: getR('.pill-status-available'),
          location: getR('.pill-location'),
          arrowRight: getR('.arrow-to-box-right'),
          shekhar: getR('.hero-shekhar-handwritten')
        }, null, 2);
      })()`
    });
    console.log("ELEMENT RECTS AT 1440:", rectsRes.result.value);

    // Capture 1440x900
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));
    let snap = await send('Page.captureScreenshot');
    fs.writeFileSync(`${OUT_DIR}/current_hero_1440x900.png`, Buffer.from(snap.data, 'base64'));
    console.log('Saved current_hero_1440x900.png');

    // Capture 1280x800
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 300));
    snap = await send('Page.captureScreenshot');
    fs.writeFileSync(`${OUT_DIR}/current_hero_1280x800.png`, Buffer.from(snap.data, 'base64'));
    console.log('Saved current_hero_1280x800.png');

    // Capture 390x844 (mobile)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 300));
    snap = await send('Page.captureScreenshot');
    fs.writeFileSync(`${OUT_DIR}/current_hero_390x844.png`, Buffer.from(snap.data, 'base64'));
    console.log('Saved current_hero_390x844.png');

    ws.close();
    chromeProc.kill();
  } catch (err) {
    console.error('Error:', err);
    chromeProc.kill();
  }
}

capture();
