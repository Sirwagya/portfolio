import { spawn } from 'child_process';
import http from 'http';

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9222;

const chromeProc = spawn(CHROME, [
  '--headless=new',
  '--disable-gpu',
  `--remote-debugging-port=${PORT}`,
  '--window-size=1440,1000',
  'http://127.0.0.1:5173/'
]);

setTimeout(async () => {
  try {
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

    ws.onopen = async () => {
      // Scroll to each card and capture screenshot
      for (const cardNum of ['01', '02', '03', '04']) {
        await send('Runtime.evaluate', {
          expression: `
            const el = document.getElementById('project-card-${cardNum}');
            if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
          `
        });
        await new Promise(r => setTimeout(r, 600));

        const snap = await send('Page.captureScreenshot');
        const fs = await import('fs');
        fs.writeFileSync(
          `/Users/sirwagyashekhar/.gemini/antigravity-ide/brain/230919de-bec9-4b5a-9e94-65eea9b00173/qa_stack_card_${cardNum}.png`,
          Buffer.from(snap.data, 'base64')
        );
        console.log(`Saved qa_stack_card_${cardNum}.png`);
      }
      ws.close();
      chromeProc.kill();
    };
  } catch (err) {
    console.error(err);
    chromeProc.kill();
  }
}, 1500);
