import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "sitemap.xml",
  "robots.txt",
  "ce9f35d3f2b24fc9a0b8798e7b7f23db.txt",
  "world-cup-2026-schedule/index.html",
  "where-to-watch-world-cup-2026-usa/index.html",
  "usa-world-cup-2026-schedule/index.html",
  "world-cup-2026-host-cities/index.html",
  "world-cup-2026-opening-ceremony/index.html",
  "world-cup-2026-qualifiers-table/index.html",
  "world-cup-2026-games-today/index.html",
  "world-cup-2026-games-tomorrow/index.html",
  "world-cup-2026-scores-today/index.html",
  "canada-vs-bosnia-herzegovina-world-cup-2026/index.html",
  "usa-vs-paraguay-world-cup-2026/index.html",
  "where-is-usa-playing-world-cup-2026/index.html",
  "where-is-canada-playing-world-cup-2026/index.html",
  "canada-world-cup-2026-schedule/index.html",
  "mexico-world-cup-2026-schedule/index.html",
  "mexico-vs-south-africa-world-cup-2026/index.html",
  "where-is-mexico-playing-world-cup-2026/index.html",
  "is-russia-in-world-cup-2026/index.html",
  "is-china-in-world-cup-2026/index.html",
  "has-us-ever-won-world-cup/index.html",
  "how-long-does-world-cup-last/index.html",
  "matches.json",
  "api/live-matches.js",
  "scripts/submit-indexnow.mjs"
];

const failures = [];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) failures.push(`Missing ${file}`);
}

const htmlFiles = requiredFiles.filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) continue;
  const html = fs.readFileSync(fullPath, "utf8");
  const checks = [
    ["title", /<title>[^<]{20,70}<\/title>/i],
    ["description", /<meta name="description" content="[^"]{50,170}"/i],
    ["canonical", /<link rel="canonical" href="https:\/\/2026soccerguide\.info\//i],
    ["h1", /<h1[\s\S]*?<\/h1>/i],
    ["structured data", /application\/ld\+json/i],
    ["Ahrefs analytics", /<script src="https:\/\/analytics\.ahrefs\.com\/analytics\.js" data-key="hG3h7pHW5viF0I3UJIUErw" async><\/script>/i],
    ["Google tag loader", /<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-HRV650E6GY"><\/script>/i],
    ["Google Analytics config", /gtag\('config', 'G-HRV650E6GY'\);/i],
    ["footer disclaimer", /Independent soccer viewer guide/i]
  ];
  for (const [label, pattern] of checks) {
    if (!pattern.test(html)) failures.push(`${file} missing ${label}`);
  }
  if (/<h1[\s\S]*?<h1/i.test(html)) failures.push(`${file} has more than one h1`);
  if (!/<h2[\s\S]*?<\/h2>/i.test(html)) failures.push(`${file} missing h2`);
  if (/\b(casino|betting|gambling|wager|odds)\b/i.test(html)) failures.push(`${file} contains excluded spam intent`);
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!/USA vs\. Paraguay/.test(index)) failures.push("Homepage missing USA opener");
if (!/Tubi/.test(index)) failures.push("Homepage missing Tubi watch intent");
if (!/ET<\/span>/.test(index)) failures.push("Homepage missing timezone table");
if (!/2026 World Cup Matchday Tools for U\.S\., Canada, and Mexico Fans/.test(index)) failures.push("Homepage missing matchday H1 positioning");
if (!/id="live-matchday"/.test(index)) failures.push("Homepage missing live matchday module");
if (!/Mexico vs\. South Africa/.test(index)) failures.push("Homepage missing Mexico opener");

const matchesPath = path.join(root, "matches.json");
if (fs.existsSync(matchesPath)) {
  const matches = JSON.parse(fs.readFileSync(matchesPath, "utf8"));
  if (!Array.isArray(matches.fixtures) || matches.fixtures.length < 10) failures.push("matches.json missing fixture fallback data");
  if (!matches.updated || !matches.source) failures.push("matches.json missing metadata");
}

const liveApiPath = path.join(root, "api/live-matches.js");
if (fs.existsSync(liveApiPath)) {
  const liveApi = fs.readFileSync(liveApiPath, "utf8");
  if (!/site\.api\.espn\.com\/apis\/site\/v2\/sports\/soccer\/fifa\.world\/scoreboard/.test(liveApi)) failures.push("live API missing ESPN scoreboard source");
  if (!/fallbackFixtures/.test(liveApi)) failures.push("live API missing fallback fixtures");
  if (!/s-maxage=60/.test(liveApi)) failures.push("live API missing short cache policy");
}

const appJs = fs.readFileSync(path.join(root, "app.js"), "utf8");
if (!/\/api\/live-matches\/\?/.test(appJs)) failures.push("app.js should fetch trailing-slash API endpoint");

const indexNowKeyPath = path.join(root, "ce9f35d3f2b24fc9a0b8798e7b7f23db.txt");
if (fs.existsSync(indexNowKeyPath)) {
  const indexNowKey = fs.readFileSync(indexNowKeyPath, "utf8").trim();
  if (indexNowKey !== "ce9f35d3f2b24fc9a0b8798e7b7f23db") failures.push("IndexNow key file has wrong content");
}

const indexNowScriptPath = path.join(root, "scripts/submit-indexnow.mjs");
if (fs.existsSync(indexNowScriptPath)) {
  const indexNowScript = fs.readFileSync(indexNowScriptPath, "utf8");
  if (!/api\.indexnow\.org\/indexnow/.test(indexNowScript)) failures.push("IndexNow script missing API endpoint");
  if (!/keyLocation/.test(indexNowScript)) failures.push("IndexNow script missing keyLocation");
  if (!/sitemap\.xml/.test(indexNowScript)) failures.push("IndexNow script should read sitemap.xml");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Site check passed for ${requiredFiles.length} files.`);
