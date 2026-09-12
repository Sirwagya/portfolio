import { execSync } from "child_process";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT_DIR = '/Users/sirwagyashekhar/.gemini/antigravity-ide/brain/230919de-bec9-4b5a-9e94-65eea9b00173';

function snap(name, width, height, url = "http://127.0.0.1:5173/") {
  const outFile = `${OUT_DIR}/${name}.png`;
  const profileDir = `/tmp/chrome_snap_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  console.log(`Capturing ${name} (${width}x${height})...`);
  try {
    execSync(
      `"${CHROME}" --headless --disable-gpu --user-data-dir="${profileDir}" --virtual-time-budget=1500 --window-size=${width},${height} --screenshot="${outFile}" "${url}"`,
      { stdio: "ignore" },
    );
    execSync(`rm -rf "${profileDir}"`, { stdio: "ignore" });
    console.log(`Saved ${outFile}`);
  } catch (err) {
    console.error(`Error capturing ${name}:`, err.message);
  }
}

// 1. Desktop 1440x1000 (Hero + About)
snap("final_desktop_hero", 1440, 1050);

// 2. Desktop Case Studies (#work)
snap("final_desktop_work", 1440, 1300, "http://127.0.0.1:5173/#work");

// 3. Desktop Playground (#playground)
snap(
  "final_desktop_playground",
  1440,
  1100,
  "http://127.0.0.1:5173/#playground",
);

// 4. Desktop Contact & Footer (#contact)
snap("final_desktop_contact", 1440, 1100, "http://127.0.0.1:5173/#contact");

// 5. Tablet 768x1024
snap("final_tablet_768", 768, 1024);

// 6. Mobile 390x844 (iPhone 14 / 15)
snap("final_mobile_390", 390, 844);

// 7. Mobile 375x812 (iPhone mini / SE)
snap("final_mobile_375", 375, 812);
