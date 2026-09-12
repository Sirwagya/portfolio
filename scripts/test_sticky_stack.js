import { execSync } from 'child_process';

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT_DIR = "/Users/sirwagyashekhar/.gemini/antigravity-ide/brain/230919de-bec9-4b5a-9e94-65eea9b00173";

function snap(name, width, height, hash) {
  const outFile = `${OUT_DIR}/${name}.png`;
  const profileDir = `/tmp/chrome_sticky_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const url = `http://127.0.0.1:5173/${hash}`;
  console.log(`Capturing ${name} (${width}x${height}) at ${url}...`);
  try {
    execSync(
      `"${CHROME}" --headless=new --disable-gpu --user-data-dir="${profileDir}" --virtual-time-budget=2500 --window-size=${width},${height} --screenshot="${outFile}" "${url}"`,
      { stdio: 'ignore' }
    );
    execSync(`rm -rf "${profileDir}"`, { stdio: 'ignore' });
    console.log(`Saved ${name}.png`);
  } catch (err) {
    console.error(`Error capturing ${name}:`, err.message);
  }
}

// Capture each card anchored
snap("sticky_stack_01_nexora", 1440, 1000, "#project-card-01");
snap("sticky_stack_02_onceuponme", 1440, 1000, "#project-card-02");
snap("sticky_stack_03_campus", 1440, 1000, "#project-card-03");
snap("sticky_stack_04_crave", 1440, 1000, "#project-card-04");

// Full tall capture of the entire work section showing all 4 stacked
snap("sticky_stack_tall_all", 1440, 3600, "#work");
console.log("Sticky stack testing finished!");
