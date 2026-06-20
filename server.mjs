import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const require = createRequire(import.meta.url);
const liveMatchesHandler = require("./api/live-matches.js");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function serveLiveMatches(req, res) {
  const response = {
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    status(statusCode) {
      res.statusCode = statusCode;
      return response;
    },
    json(payload) {
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(JSON.stringify(payload));
      return response;
    }
  };

  Promise.resolve(liveMatchesHandler(req, response)).catch((error) => {
    if (res.writableEnded) return;
    res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: error.message }));
  });
}

function resolveRequest(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const safePath = cleanPath.replace(/^\/+/, "");
  let filePath = path.join(root, safePath);
  if (!path.normalize(filePath).startsWith(root)) {
    return null;
  }
  if (cleanPath.endsWith("/")) {
    filePath = path.join(filePath, "index.html");
  }
  if (!path.extname(filePath)) {
    const folderIndex = path.join(filePath, "index.html");
    if (fs.existsSync(folderIndex)) return folderIndex;
    filePath = `${filePath}.html`;
  }
  return filePath;
}

http.createServer((req, res) => {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  if (pathname === "/api/live-matches/" || pathname === "/api/live-matches") {
    serveLiveMatches(req, res);
    return;
  }

  const filePath = resolveRequest(req.url || "/");
  if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const type = types[path.extname(filePath)] || "application/octet-stream";
  res.writeHead(200, { "content-type": type });
  fs.createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`2026 Soccer Guide preview: http://localhost:${port}`);
});
