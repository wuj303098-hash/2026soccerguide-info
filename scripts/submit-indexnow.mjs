import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const host = "2026soccerguide.info";
const key = "ce9f35d3f2b24fc9a0b8798e7b7f23db";
const keyLocation = `https://${host}/${key}.txt`;
const endpoint = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry-run");

const sitemapXml = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const invalidUrls = urlList.filter((url) => !url.startsWith(`https://${host}/`));
if (!urlList.length) {
  console.error("No URLs found in sitemap.xml.");
  process.exit(1);
}

if (invalidUrls.length) {
  console.error(`Sitemap contains URLs outside ${host}:`);
  console.error(invalidUrls.join("\n"));
  process.exit(1);
}

const payload = {
  host,
  key,
  keyLocation,
  urlList
};

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify(payload)
});

const body = await response.text();
console.log(`IndexNow status: ${response.status}`);
console.log(`Submitted URLs: ${urlList.length}`);
console.log(`Key location: ${keyLocation}`);
if (body) console.log(body);

if (![200, 202].includes(response.status)) {
  process.exit(1);
}
