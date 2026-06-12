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
  "world-cup-2026-schedule/index.html",
  "where-to-watch-world-cup-2026-usa/index.html",
  "usa-world-cup-2026-schedule/index.html",
  "world-cup-2026-host-cities/index.html",
  "world-cup-2026-opening-ceremony/index.html",
  "world-cup-2026-qualifiers-table/index.html",
  "is-russia-in-world-cup-2026/index.html",
  "is-china-in-world-cup-2026/index.html",
  "has-us-ever-won-world-cup/index.html",
  "how-long-does-world-cup-last/index.html"
];

const failures = [];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) failures.push(`Missing ${file}`);
}

const htmlFiles = requiredFiles.filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
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
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!/USA vs\. Paraguay/.test(index)) failures.push("Homepage missing USA opener");
if (!/Tubi/.test(index)) failures.push("Homepage missing Tubi watch intent");
if (!/ET<\/span>/.test(index)) failures.push("Homepage missing timezone table");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Site check passed for ${requiredFiles.length} files.`);
