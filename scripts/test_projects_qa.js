import { execSync } from 'child_process';

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT_DIR = "/Users/sirwagyashekhar/.gemini/antigravity-ide/brain/230919de-bec9-4b5a-9e94-65eea9b00173";

function snap(name, width, height, url) {
  const outFile = `${OUT_DIR}/${name}.png`;
  const profileDir = `/tmp/chrome_qa_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  console.log(`Capturing ${name} (${width}x${height}) from ${url}...`);
  try {
    execSync(
      `"${CHROME}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --virtual-time-budget=2000 --window-size=${width},${height} --screenshot="${outFile}" "${url}"`,
      { stdio: 'ignore' }
    );
    execSync(`rm -rf "${profileDir}"`, { stdio: 'ignore' });
    console.log(`Saved ${name}.png`);
  } catch (err) {
    console.error(`Error capturing ${name}:`, err.message);
  }
}

// 1. All 4 Projects at 1440x1100 (focused on #work section)
snap("qa_project_01_nexora", 1440, 1100, "http://127.0.0.1:5173/?project=01#work");
snap("qa_project_02_onceuponme", 1440, 1100, "http://127.0.0.1:5173/?project=02#work");
snap("qa_project_03_campus", 1440, 1100, "http://127.0.0.1:5173/?project=03#work");
snap("qa_project_04_crave", 1440, 1100, "http://127.0.0.1:5173/?project=04#work");

// 2. Responsive Viewports for Crave Check
snap("qa_crave_1280", 1280, 1000, "http://127.0.0.1:5173/?project=04#work");
snap("qa_crave_1024", 1024, 1100, "http://127.0.0.1:5173/?project=04#work");
snap("qa_crave_768", 768, 1200, "http://127.0.0.1:5173/?project=04#work");
snap("qa_crave_430", 430, 1400, "http://127.0.0.1:5173/?project=04#work");
snap("qa_crave_390", 390, 1400, "http://127.0.0.1:5173/?project=04#work");
snap("qa_crave_375", 375, 1400, "http://127.0.0.1:5173/?project=04#work");
console.log("All captures complete!");
