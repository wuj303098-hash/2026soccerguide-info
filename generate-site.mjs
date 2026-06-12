import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicRoot = path.join(root, "public");
const siteUrl = "https://2026soccerguide.info";
const updated = "June 12, 2026";

const image = {
  sofi: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SoFi%20Stadium%202021.jpg?width=1600",
  metlife: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Metlife%20stadium%20%28Aerial%20view%29.jpg?width=1600",
  att: "https://commons.wikimedia.org/wiki/Special:Redirect/file/AT%26T%20Stadium%20Aerial.jpeg?width=1600"
};

const sources = [
  ["FIFA 2026 official tournament hub", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"],
  ["FIFA host cities", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/host-cities"],
  ["Tubi World Cup FOX Hub", "https://tubitv.com/hubs/fifa-world-cup-fox-hub"],
  ["CBS schedule and how to watch", "https://www.cbsnews.com/news/world-cup-2026-schedule-how-to-watch/"]
];

const nav = [
  ["Schedule", "/world-cup-2026-schedule/"],
  ["Where to Watch", "/where-to-watch-world-cup-2026-usa/"],
  ["USA Team", "/usa-world-cup-2026-schedule/"],
  ["Host Cities", "/world-cup-2026-host-cities/"],
  ["FAQ", "/world-cup-2026-qualifiers-table/"]
];

const fixtures = [
  ["June 11", "", "Mexico vs. South Africa", "Group A", "Mexico City", "FOX, Telemundo, Tubi live/free"],
  ["June 11", "", "South Korea vs. Czechia", "Group A", "Guadalajara", "FOX, Telemundo"],
  ["June 12", "3:00 PM ET", "Canada vs. Bosnia and Herzegovina", "Group B", "Toronto", "FOX, Telemundo"],
  ["June 12", "9:00 PM ET", "USA vs. Paraguay", "Group D", "Inglewood", "FOX, Telemundo, Tubi live/free"],
  ["June 13", "3:00 PM ET", "Qatar vs. Switzerland", "Group B", "San Francisco Bay Area", "FOX, Telemundo"],
  ["June 13", "6:00 PM ET", "Brazil vs. Morocco", "Group C", "New York/New Jersey", "FS1, Telemundo"],
  ["June 13", "9:00 PM ET", "Haiti vs. Scotland", "Group C", "Boston", "FS1, Telemundo"],
  ["June 14", "12:00 AM ET", "Australia vs. Turkey", "Group D", "Vancouver", "FS1, Telemundo"],
  ["June 14", "1:00 PM ET", "Germany vs. Curacao", "Group E", "Houston", "FOX, Telemundo"],
  ["June 14", "4:00 PM ET", "Netherlands vs. Japan", "Group F", "Dallas", "FOX, Telemundo"],
  ["June 14", "7:00 PM ET", "Ivory Coast vs. Ecuador", "Group E", "Philadelphia", "FS1, Telemundo"],
  ["June 14", "10:00 PM ET", "Sweden vs. Tunisia", "Group F", "Monterrey", "FS1, Telemundo"],
  ["June 15", "12:00 PM ET", "Spain vs. Cape Verde", "Group H", "Atlanta", "FOX, Telemundo"],
  ["June 15", "3:00 PM ET", "Belgium vs. Egypt", "Group G", "Seattle", "FOX, Telemundo"],
  ["June 15", "6:00 PM ET", "Saudi Arabia vs. Uruguay", "Group H", "Miami", "FS1, Telemundo"],
  ["June 15", "9:00 PM ET", "Iran vs. New Zealand", "Group G", "Inglewood", "FS1, Telemundo"],
  ["June 16", "3:00 PM ET", "France vs. Senegal", "Group I", "New York/New Jersey", "FOX, Telemundo"],
  ["June 16", "6:00 PM ET", "Iraq vs. Norway", "Group I", "Boston", "FOX, Telemundo"],
  ["June 16", "9:00 PM ET", "Argentina vs. Algeria", "Group J", "Kansas City", "FOX, Telemundo"],
  ["June 17", "12:00 AM ET", "Austria vs. Jordan", "Group J", "San Francisco Bay Area", "FS1, Telemundo"],
  ["June 17", "1:00 PM ET", "Portugal vs. DR Congo", "Group K", "Houston", "FOX, Telemundo"],
  ["June 17", "4:00 PM ET", "England vs. Croatia", "Group L", "Dallas", "FOX, Telemundo"],
  ["June 17", "7:00 PM ET", "Ghana vs. Panama", "Group L", "Toronto", "FS1, Telemundo"],
  ["June 17", "10:00 PM ET", "Uzbekistan vs. Colombia", "Group K", "Mexico City", "FS1, Telemundo"],
  ["June 18", "12:00 PM ET", "Czechia vs. South Africa", "Group A", "Atlanta", "FOX, Telemundo"],
  ["June 18", "3:00 PM ET", "Switzerland vs. Bosnia and Herzegovina", "Group B", "Los Angeles", "FOX, Telemundo"],
  ["June 18", "6:00 PM ET", "Canada vs. Qatar", "Group B", "Vancouver", "FS1, Telemundo"],
  ["June 18", "9:00 PM ET", "Mexico vs. South Korea", "Group A", "Guadalajara", "FOX, Telemundo"],
  ["June 19", "3:00 PM ET", "USA vs. Australia", "Group D", "Seattle", "FOX, Telemundo"],
  ["June 19", "6:00 PM ET", "Scotland vs. Morocco", "Group C", "Boston", "FOX, Telemundo"],
  ["June 19", "8:30 PM ET", "Brazil vs. Haiti", "Group C", "Philadelphia", "FOX, Telemundo"],
  ["June 19", "11:00 PM ET", "Turkey vs. Paraguay", "Group D", "San Francisco Bay Area", "FS1, Telemundo"],
  ["June 20", "1:00 PM ET", "Netherlands vs. Sweden", "Group F", "Houston", "FOX, Telemundo"],
  ["June 20", "4:00 PM ET", "Germany vs. Ivory Coast", "Group E", "Toronto", "FOX, Telemundo"],
  ["June 20", "8:00 PM ET", "Ecuador vs. Curacao", "Group E", "Kansas City", "FS1, Telemundo"],
  ["June 21", "12:00 AM ET", "Tunisia vs. Japan", "Group F", "Monterrey", "FS1, Telemundo"],
  ["June 21", "12:00 PM ET", "Spain vs. Saudi Arabia", "Group H", "Atlanta", "FOX, Telemundo"],
  ["June 21", "3:00 PM ET", "Belgium vs. Iran", "Group G", "Inglewood", "FS1, Telemundo"],
  ["June 21", "6:00 PM ET", "Uruguay vs. Cape Verde", "Group H", "Miami", "FS1, Telemundo"],
  ["June 21", "9:00 PM ET", "New Zealand vs. Egypt", "Group G", "Vancouver", "FS1, Telemundo"],
  ["June 22", "1:00 PM ET", "Argentina vs. Austria", "Group J", "Dallas", "FOX, Telemundo"],
  ["June 22", "5:00 PM ET", "France vs. Iraq", "Group I", "Philadelphia", "FOX, Telemundo"],
  ["June 22", "8:00 PM ET", "Norway vs. Senegal", "Group I", "New York/New Jersey", "FOX, Telemundo"],
  ["June 22", "11:00 PM ET", "Jordan vs. Algeria", "Group J", "San Francisco Bay Area", "FS1, Telemundo"],
  ["June 23", "1:00 PM ET", "Portugal vs. Uzbekistan", "Group K", "Houston", "FOX, Telemundo"],
  ["June 23", "4:00 PM ET", "England vs. Ghana", "Group L", "Boston", "FOX, Telemundo"],
  ["June 23", "7:00 PM ET", "Panama vs. Croatia", "Group L", "Toronto", "FS1, Universo"],
  ["June 23", "10:00 PM ET", "Colombia vs. DR Congo", "Group K", "Guadalajara", "FS1, Universo"],
  ["June 24", "3:00 PM ET", "Canada vs. Switzerland", "Group B", "Vancouver", "FOX, Telemundo"],
  ["June 24", "3:00 PM ET", "Bosnia and Herzegovina vs. Qatar", "Group B", "Seattle", "FS1, Universo"],
  ["June 24", "6:00 PM ET", "Morocco vs. Haiti", "Group C", "Atlanta", "FS1, Universo"],
  ["June 24", "6:00 PM ET", "Scotland vs. Brazil", "Group C", "Miami", "FOX, Telemundo"],
  ["June 24", "9:00 PM ET", "Mexico vs. Czechia", "Group A", "Mexico City", "FOX, Telemundo"],
  ["June 24", "9:00 PM ET", "South Korea vs. South Africa", "Group A", "Monterrey", "FS1, Universo"],
  ["June 25", "4:00 PM ET", "Curacao vs. Ivory Coast", "Group E", "Philadelphia", "FS1, Universo"],
  ["June 25", "4:00 PM ET", "Ecuador vs. Germany", "Group E", "New York/New Jersey", "FOX, Telemundo"],
  ["June 25", "7:00 PM ET", "Tunisia vs. Netherlands", "Group F", "Kansas City", "FOX, Telemundo"],
  ["June 25", "7:00 PM ET", "Japan vs. Sweden", "Group F", "Dallas", "FS1, Universo"],
  ["June 25", "10:00 PM ET", "USA vs. Turkey", "Group D", "Inglewood", "FOX, Telemundo"],
  ["June 25", "10:00 PM ET", "Paraguay vs. Australia", "Group D", "San Francisco Bay Area", "FS1, Universo"],
  ["June 26", "3:00 PM ET", "Norway vs. France", "Group I", "Boston", "FOX, Telemundo"],
  ["June 26", "3:00 PM ET", "Senegal vs. Iraq", "Group I", "Toronto", "FS1, Universo"],
  ["June 26", "8:00 PM ET", "Uruguay vs. Spain", "Group H", "Guadalajara", "FOX, Telemundo"],
  ["June 26", "8:00 PM ET", "Cape Verde vs. Saudi Arabia", "Group H", "Houston", "FS1, Universo"],
  ["June 26", "11:00 PM ET", "New Zealand vs. Belgium", "Group G", "Vancouver", "FOX, Telemundo"],
  ["June 26", "11:00 PM ET", "Egypt vs. Iran", "Group G", "Seattle", "FS1, Universo"],
  ["June 27", "5:00 PM ET", "Panama vs. England", "Group L", "New York/New Jersey", "FOX, Telemundo"],
  ["June 27", "5:00 PM ET", "Croatia vs. Ghana", "Group L", "Philadelphia", "FS1, Universo"],
  ["June 27", "7:30 PM ET", "Colombia vs. Portugal", "Group K", "Miami", "FOX, Telemundo"],
  ["June 27", "7:30 PM ET", "DR Congo vs. Uzbekistan", "Group K", "Atlanta", "FS1, Universo"],
  ["June 27", "10:00 PM ET", "Algeria vs. Austria", "Group J", "Kansas City", "FS1, Universo"],
  ["June 27", "10:00 PM ET", "Jordan vs. Argentina", "Group J", "Dallas", "FOX, Telemundo"]
].map(([date, time, match, group, venue, tv]) => ({ date, time, match, group, venue, tv }));

const usaFixtures = fixtures.filter((fixture) => fixture.match.startsWith("USA vs."));

const hostCities = [
  ["Atlanta", "Mercedes-Benz Stadium", "U.S.", "Southeast hub with early group-stage demand."],
  ["Boston", "Gillette Stadium", "U.S.", "New England venue for group and knockout interest."],
  ["Dallas", "AT&T Stadium", "U.S.", "High-volume venue with late-stage match interest."],
  ["Houston", "NRG Stadium", "U.S.", "Central time zone match planning matters here."],
  ["Kansas City", "Arrowhead Stadium", "U.S.", "Midwest host with multiple late-night ET fixtures."],
  ["Los Angeles", "SoFi Stadium", "U.S.", "Key U.S. team venue and West Coast TV anchor."],
  ["Miami", "Hard Rock Stadium", "U.S.", "Travel and Spanish-language audience demand overlap."],
  ["New York/New Jersey", "MetLife Stadium", "U.S.", "Final venue and biggest long-tail city page."],
  ["Philadelphia", "Lincoln Financial Field", "U.S.", "Strong local search for watch parties and transit."],
  ["San Francisco Bay Area", "Levi's Stadium", "U.S.", "Pacific time conversion and late kickoffs matter."],
  ["Seattle", "Lumen Field", "U.S.", "U.S. vs. Australia drives team-specific demand."],
  ["Mexico City", "Estadio Azteca", "Mexico", "Opening match and Mexico national team interest."],
  ["Guadalajara", "Estadio Akron", "Mexico", "Group A and Mexico follow-up match demand."],
  ["Monterrey", "Estadio BBVA", "Mexico", "Late-night ET fixtures for U.S. viewers."],
  ["Toronto", "BMO Field", "Canada", "Canada opener and cross-border travel search."],
  ["Vancouver", "BC Place", "Canada", "Pacific time games and Canada group-stage interest."]
];

const internalLinks = [
  ["/world-cup-2026-schedule/", "World Cup 2026 schedule"],
  ["/where-to-watch-world-cup-2026-usa/", "Where to watch World Cup 2026 in the USA"],
  ["/usa-world-cup-2026-schedule/", "USA World Cup 2026 schedule"],
  ["/world-cup-2026-host-cities/", "World Cup 2026 host cities"],
  ["/world-cup-2026-opening-ceremony/", "World Cup 2026 opening ceremony"],
  ["/world-cup-2026-qualifiers-table/", "World Cup 2026 qualifiers table"],
  ["/is-russia-in-world-cup-2026/", "Is Russia in the World Cup 2026?"],
  ["/is-china-in-world-cup-2026/", "Is China in the World Cup 2026?"],
  ["/has-us-ever-won-world-cup/", "Has the US ever won the World Cup?"],
  ["/how-long-does-world-cup-last/", "How long does the World Cup last?"]
];

const pages = [];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugPath(slug = "") {
  return slug ? `/${slug}/` : "/";
}

function absolute(slug = "") {
  return `${siteUrl}${slugPath(slug)}`;
}

function sourceList() {
  return `<ul class="source-list">${sources.map(([label, href]) => `<li><a href="${href}" rel="nofollow noopener" target="_blank">${label}</a></li>`).join("")}</ul>`;
}

function navHtml() {
  return nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
}

function ctaGrid() {
  return `<div class="link-grid">${internalLinks.map(([href, label]) => `<a class="link-tile" href="${href}"><span>${label}</span><small>Open guide</small></a>`).join("")}</div>`;
}

function matchRows(rows = fixtures) {
  return rows.map((fixture) => `
    <tr data-match="${escapeHtml(fixture.match.toLowerCase())}" data-date="${escapeHtml(fixture.date.toLowerCase())}" data-tv="${escapeHtml(fixture.tv.toLowerCase())}">
      <td><strong>${fixture.date}</strong><span>${fixture.time || "Time TBA"}</span></td>
      <td>${fixture.match}<span>${fixture.group}</span></td>
      <td>${fixture.venue}</td>
      <td>${fixture.tv}</td>
    </tr>
  `).join("");
}

function timeRows(rows) {
  return rows.map((fixture) => {
    const time = fixture.time || "TBA";
    const hour = Number(time.match(/^(\d+)/)?.[1] || 0);
    const isPm = /PM/.test(time);
    const et24 = time === "TBA" ? null : ((hour % 12) + (isPm ? 12 : 0));
    const minutes = time.match(/:(\d+)/)?.[1] || "00";
    function zone(offset) {
      if (et24 === null) return "TBA";
      let h = (et24 + offset + 24) % 24;
      const suffix = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      return `${h}:${minutes} ${suffix}`;
    }
    return `
      <tr>
        <td>${fixture.match}</td>
        <td><span>ET</span>${zone(0)}</td>
        <td><span>CT</span>${zone(-1)}</td>
        <td><span>MT</span>${zone(-2)}</td>
        <td><span>PT</span>${zone(-3)}</td>
      </tr>
    `;
  }).join("");
}

function schema(type, payload) {
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": type, ...payload })}</script>`;
}

function faqSchema(items) {
  return schema("FAQPage", {
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  });
}

function layout({ slug = "", title, description, h1, eyebrow = "Updated guide", body, schemaMarkup = "", imageUrl = image.sofi }) {
  const url = absolute(slug);
  const canonicalPath = slugPath(slug);
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index,follow">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${imageUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/styles.css">
  ${schema("WebSite", {
    name: "2026 Soccer Guide",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/world-cup-2026-schedule/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  })}
  ${schema("WebPage", {
    name: title,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: "2026 Soccer Guide", url: siteUrl },
    dateModified: "2026-06-12"
  })}
  ${schemaMarkup}
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="hG3h7pHW5viF0I3UJIUErw" async></script>
</head>
<body data-path="${canonicalPath}">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="/" aria-label="2026 Soccer Guide home">
      <span class="brand-mark">26</span>
      <span>2026 Soccer Guide</span>
    </a>
    <nav class="site-nav" aria-label="Primary navigation">${navHtml()}</nav>
  </header>
  <main id="main">
    <section class="page-hero">
      <div class="hero-copy">
        <p class="eyebrow">${eyebrow} | ${updated}</p>
        <h1>${h1}</h1>
        <p>${description}</p>
      </div>
      <figure class="hero-media">
        <img src="${imageUrl}" alt="A 2026 World Cup host stadium exterior" loading="eager">
        <figcaption>Built for quick match planning, TV lookups, and U.S. time zones.</figcaption>
      </figure>
    </section>
    ${body}
  </main>
  <footer class="site-footer">
    <div>
      <strong>2026 Soccer Guide</strong>
      <p>Independent soccer viewer guide for U.S. fans. Not affiliated with FIFA, FOX, Tubi, Telemundo, NBCUniversal, or any tournament organizer.</p>
    </div>
    <nav aria-label="Footer links">${navHtml()}</nav>
  </footer>
  <script src="/app.js" defer></script>
</body>
</html>`;
  pages.push({ slug, title, description, html });
}

layout({
  title: "2026 World Cup TV Schedule for US Fans | 2026 Soccer Guide",
  description: "A fast U.S. viewer guide for the 2026 World Cup schedule, TV channels, free streaming notes, USA match times, host cities, and common fan questions.",
  h1: "2026 World Cup TV Schedule for US Fans",
  eyebrow: "U.S. match planner",
  imageUrl: image.sofi,
  body: `
    <section class="dashboard-band">
      <div class="stat-strip">
        <div><span>104</span><small>total matches</small></div>
        <div><span>FOX / FS1</span><small>English TV path</small></div>
        <div><span>Telemundo</span><small>Spanish TV path</small></div>
        <div><span>ET to PT</span><small>time zones covered</small></div>
      </div>
      <div class="notice">
        <strong>Tonight's highest-intent match:</strong>
        USA vs. Paraguay kicks off at 9:00 PM ET on June 12 in Inglewood, with FOX and Telemundo coverage. Tubi is promoting it as a live and free stream.
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Today and Next Matches</h2>
        <p>Built around the queries rising in Google Trends: schedule, where to watch, USA games, free streaming, and kickoff time.</p>
      </div>
      <div class="match-list">
        ${fixtures.slice(2, 7).map((fixture) => `
          <article class="match-card">
            <span>${fixture.date}</span>
            <h3>${fixture.match}</h3>
            <p>${fixture.time || "Time TBA"} | ${fixture.venue}</p>
            <small>${fixture.tv}</small>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section split-section">
      <div>
        <h2>Quick U.S. Time Conversion</h2>
        <p>Most fans search in local time. The site keeps ET as the source time and translates the key U.S. matches for CT, MT, and PT viewers.</p>
      </div>
      <div class="table-wrap compact">
        <table>
          <thead><tr><th>Match</th><th>ET</th><th>CT</th><th>MT</th><th>PT</th></tr></thead>
          <tbody>${timeRows([fixtures[3], fixtures[28], fixtures[58]])}</tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Start With These Guides</h2>
        <p>Each page targets a specific search intent instead of trying to rank one broad homepage for everything.</p>
      </div>
      ${ctaGrid()}
    </section>

    <section class="section split-section source-panel">
      <div>
        <h2>What This Site Uses as Source Material</h2>
        <p>Schedules and broadcast notes can change. The site links back to primary or high-signal sources so visitors can confirm critical details before kickoff.</p>
      </div>
      ${sourceList()}
    </section>
  `
});

layout({
  slug: "world-cup-2026-schedule",
  title: "World Cup 2026 Schedule in U.S. Time | TV Channels and Match List",
  description: "World Cup 2026 group-stage schedule in U.S. time with match dates, kickoff times, host cities, FOX or FS1 coverage, and Spanish-language TV notes.",
  h1: "World Cup 2026 Schedule in U.S. Time",
  imageUrl: image.metlife,
  body: `
    <section class="section">
      <div class="section-head">
        <h2>Group Stage Match Table</h2>
        <p>Search by team, date, host city, or TV channel. ET is listed first because most U.S. broadcast schedules use Eastern Time.</p>
      </div>
      <div class="tool-row">
        <label for="schedule-search">Filter schedule</label>
        <input id="schedule-search" class="search-input" type="search" placeholder="Try USA, FOX, June 19, Dallas">
      </div>
      <div class="table-wrap">
        <table class="schedule-table" id="schedule-table">
          <thead><tr><th>Date and time</th><th>Match</th><th>Host area</th><th>U.S. TV</th></tr></thead>
          <tbody>${matchRows()}</tbody>
        </table>
      </div>
    </section>
    <section class="section split-section">
      <div>
        <h2>Knockout Dates</h2>
        <p>The group stage runs through June 27. Round of 32 matches begin June 28, the semifinals are scheduled for July 14 and July 15, and the final is scheduled for July 19 at MetLife Stadium in New Jersey.</p>
      </div>
      <div class="key-list">
        <p><strong>Round of 32:</strong> June 28 to July 3</p>
        <p><strong>Round of 16:</strong> July 4 to July 7</p>
        <p><strong>Quarterfinals:</strong> July 9 to July 11</p>
        <p><strong>Final:</strong> July 19 at 3:00 PM ET</p>
      </div>
    </section>
    <section class="section">${ctaGrid()}</section>
  `
});

layout({
  slug: "where-to-watch-world-cup-2026-usa",
  title: "Where to Watch World Cup 2026 in the USA | TV and Streaming Guide",
  description: "A U.S. viewing guide for World Cup 2026 with FOX, FS1, Telemundo, Universo, Tubi, FOX One, Peacock, and live TV streaming options.",
  h1: "Where to Watch World Cup 2026 in the USA",
  imageUrl: image.att,
  body: `
    <section class="section">
      <div class="section-head">
        <h2>Best Viewing Options by Need</h2>
        <p>The big SEO distinction is simple: some fans want a free TV path, some want Spanish coverage, and some need streaming without cable.</p>
      </div>
      <div class="option-grid">
        <article><h3>Free English TV</h3><p>FOX carries many matches over the air. A TV antenna or FOX access through a smart TV may be enough for a large share of the tournament.</p></article>
        <article><h3>Cable English TV</h3><p>FS1 carries selected matches, especially when the schedule stacks several games on the same day.</p></article>
        <article><h3>Spanish TV</h3><p>Telemundo carries most matches in Spanish. Universo is used for selected games.</p></article>
        <article><h3>Free Streaming</h3><p>Tubi is promoting Mexico vs. South Africa and USA vs. Paraguay as live and free streams, plus catch-up content and highlights.</p></article>
        <article><h3>Paid Streaming</h3><p>FOX One, the FOX Sports app, Peacock, YouTube TV, Fubo, and Hulu + Live TV are useful when you want app-based access or do not have an antenna.</p></article>
        <article><h3>Before Kickoff</h3><p>Check the match row first, then confirm your local FOX or Telemundo station if you are using broadcast TV.</p></article>
      </div>
    </section>
    <section class="section split-section">
      <div>
        <h2>Free Match Notes</h2>
        <p>Avoid saying every game is free on Tubi. The safer search-friendly claim is that selected matches are promoted as free, including the opener and the USA opener.</p>
      </div>
      <div class="key-list">
        <p><strong>June 11:</strong> Mexico vs. South Africa</p>
        <p><strong>June 12:</strong> USA vs. Paraguay</p>
        <p><strong>Always confirm:</strong> app listings, local TV availability, and kickoff time before matchday.</p>
      </div>
    </section>
    <section class="section source-panel">
      <h2>Sources to Check</h2>
      ${sourceList()}
    </section>
  `
});

layout({
  slug: "usa-world-cup-2026-schedule",
  title: "USA World Cup 2026 Schedule | U.S. Match Times, TV Channels, Venues",
  description: "USA World Cup 2026 group-stage schedule with Paraguay, Australia, and Turkey match times in ET, CT, MT, and PT plus U.S. TV notes.",
  h1: "USA World Cup 2026 Schedule",
  imageUrl: image.sofi,
  body: `
    <section class="section">
      <div class="section-head">
        <h2>USA Group Matches</h2>
        <p>The U.S. opens against Paraguay in Inglewood, then plays Australia in Seattle and Turkey back in Inglewood.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Match</th><th>ET</th><th>CT</th><th>MT</th><th>PT</th></tr></thead>
          <tbody>${timeRows(usaFixtures)}</tbody>
        </table>
      </div>
    </section>
    <section class="section match-list">
      ${usaFixtures.map((fixture) => `
        <article class="match-card feature-card">
          <span>${fixture.date}</span>
          <h2>${fixture.match}</h2>
          <p>${fixture.time} | ${fixture.venue}</p>
          <small>${fixture.tv}</small>
        </article>
      `).join("")}
    </section>
    <section class="section split-section">
      <div>
        <h2>Is the U.S. in the World Cup 2026?</h2>
        <p>Yes. The United States is one of the co-hosts and is playing in Group D. The highest-search question is basic, so this page answers it immediately before moving into schedule details.</p>
      </div>
      <div class="key-list">
        <p><strong>Group:</strong> D</p>
        <p><strong>Opponents:</strong> Paraguay, Australia, Turkey</p>
        <p><strong>U.S. venues:</strong> Inglewood and Seattle</p>
      </div>
    </section>
  `
});

layout({
  slug: "world-cup-2026-host-cities",
  title: "World Cup 2026 Host Cities | U.S., Mexico, and Canada Venue Guide",
  description: "World Cup 2026 host cities and venues across the United States, Mexico, and Canada, with a U.S. viewer angle for match planning and travel searches.",
  h1: "World Cup 2026 Host Cities",
  imageUrl: image.metlife,
  body: `
    <section class="section">
      <div class="section-head">
        <h2>All 16 Host Areas</h2>
        <p>FIFA lists host cities across the United States, Mexico, and Canada. For SEO, each city can later become its own local viewing and stadium guide.</p>
      </div>
      <div class="city-grid">
        ${hostCities.map(([city, stadium, country, note]) => `
          <article>
            <span>${country}</span>
            <h3>${city}</h3>
            <p>${stadium}</p>
            <small>${note}</small>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section split-section">
      <div>
        <h2>Best City Pages to Expand First</h2>
        <p>Start with Los Angeles, New York/New Jersey, Seattle, Dallas, Mexico City, and Toronto because they connect directly to USA games, opening-match demand, or final-match demand.</p>
      </div>
      <figure class="wide-photo">
        <img src="${image.att}" alt="Aerial view of a major U.S. host stadium" loading="lazy">
      </figure>
    </section>
  `
});

layout({
  slug: "world-cup-2026-opening-ceremony",
  title: "World Cup 2026 Opening Ceremony | Time, Performers, Match, Replay",
  description: "World Cup 2026 opening ceremony guide for U.S. viewers, including the June 11 opener, performer search interest, Tubi replay notes, and what to verify.",
  h1: "World Cup 2026 Opening Ceremony Guide",
  imageUrl: image.sofi,
  body: `
    <section class="section split-section">
      <div>
        <h2>The Short-Term Search Spike</h2>
        <p>Your Google Trends exports show opening ceremony queries rising fast, including performer searches for Shakira and Andrea Bocelli, plus time-based searches such as ceremony time and opening ceremony date.</p>
      </div>
      <div class="key-list">
        <p><strong>Opening match:</strong> Mexico vs. South Africa</p>
        <p><strong>Date:</strong> June 11, 2026</p>
        <p><strong>U.S. replay angle:</strong> Tubi catch-up and highlights</p>
      </div>
    </section>
    <section class="section">
      <h2>What Fans Usually Want</h2>
      <div class="option-grid">
        <article><h3>What time was it?</h3><p>Answer the U.S. time zone clearly and link to the match schedule.</p></article>
        <article><h3>Who performed?</h3><p>Keep performer notes factual and update them after official broadcasts or reliable recaps.</p></article>
        <article><h3>Where can I replay it?</h3><p>Send visitors to Tubi, FOX, or other authorized highlights instead of embedding unauthorized clips.</p></article>
      </div>
    </section>
  `
});

layout({
  slug: "world-cup-2026-qualifiers-table",
  title: "World Cup 2026 Qualifiers Table and Team FAQ | Final Tournament Guide",
  description: "A simple World Cup 2026 qualifiers and team-intent guide answering whether Russia, China, Israel, the U.S., Mexico, and other searched teams are in the tournament.",
  h1: "World Cup 2026 Qualifiers Table and Team FAQ",
  imageUrl: image.metlife,
  body: `
    <section class="section">
      <div class="section-head">
        <h2>Why This Page Exists</h2>
        <p>Trend data shows users asking if specific countries are in the tournament. A clean FAQ-style qualifiers page can catch that long-tail demand without writing low-value news posts.</p>
      </div>
      <div class="option-grid">
        <article><h3>United States</h3><p>Yes. The U.S. is a co-host and plays Paraguay, Australia, and Turkey in Group D.</p></article>
        <article><h3>Mexico</h3><p>Yes. Mexico opened the tournament against South Africa and has strong Group A search demand.</p></article>
        <article><h3>Canada</h3><p>Yes. Canada opens against Bosnia and Herzegovina in Toronto.</p></article>
        <article><h3>Russia</h3><p>No. Russia is not listed in the 2026 final tournament match schedule.</p></article>
        <article><h3>China</h3><p>No. China is not listed in the 2026 final tournament match schedule.</p></article>
        <article><h3>Israel</h3><p>No. Israel is not listed in the 2026 final tournament match schedule.</p></article>
      </div>
    </section>
    <section class="section">${ctaGrid()}</section>
  `
});

const faqPages = [
  {
    slug: "is-russia-in-world-cup-2026",
    title: "Is Russia in the World Cup 2026? | Quick Team Status Answer",
    h1: "Is Russia in the World Cup 2026?",
    answer: "No. Russia is not listed in the 2026 World Cup final tournament match schedule.",
    body: "The query is rising because casual fans often check country status after the tournament begins. Use the official match center or a live broadcast schedule for final verification before writing matchday content."
  },
  {
    slug: "is-china-in-world-cup-2026",
    title: "Is China in the World Cup 2026? | Quick Team Status Answer",
    h1: "Is China in the World Cup 2026?",
    answer: "No. China is not listed in the 2026 World Cup final tournament match schedule.",
    body: "The better SEO angle is not a long history article. Answer the yes-or-no question first, then link readers to the qualifiers and final tournament schedule."
  },
  {
    slug: "has-us-ever-won-world-cup",
    title: "Has the US Ever Won the World Cup? | Men's Tournament Answer",
    h1: "Has the US Ever Won the World Cup?",
    answer: "No. The U.S. men's national team has not won the men's World Cup.",
    body: "This page targets a broad fan FAQ that spikes when the U.S. team plays. Keep the answer short, then move visitors toward the USA 2026 schedule."
  },
  {
    slug: "how-long-does-world-cup-last",
    title: "How Long Does the World Cup Last in 2026? | Dates and Rounds",
    h1: "How Long Does the World Cup Last in 2026?",
    answer: "The 2026 tournament runs from June 11 to July 19, lasting 39 calendar days.",
    body: "Group-stage matches run through June 27. The knockout rounds begin June 28, the semifinals are July 14 and July 15, and the final is July 19."
  }
];

for (const page of faqPages) {
  layout({
    slug: page.slug,
    title: page.title,
    description: `${page.answer} Updated for U.S. viewers with related 2026 schedule links and tournament context.`,
    h1: page.h1,
    imageUrl: image.att,
    schemaMarkup: faqSchema([[page.h1, page.answer]]),
    body: `
      <section class="answer-panel">
        <h2>Quick Answer</h2>
        <p>${page.answer}</p>
      </section>
      <section class="section split-section">
        <div>
          <h2>Why Fans Search This</h2>
          <p>${page.body}</p>
        </div>
        <div class="key-list">
          <p><strong>Updated:</strong> ${updated}</p>
          <p><strong>Useful next step:</strong> Check the full match schedule</p>
          <p><a href="/world-cup-2026-schedule/">Open World Cup 2026 schedule</a></p>
        </div>
      </section>
      <section class="section">${ctaGrid()}</section>
    `
  });
}

function writeFile(relative, content) {
  const fullPath = path.join(root, relative);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
}

function writePublic(relative, content) {
  const fullPath = path.join(publicRoot, relative);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
}

fs.rmSync(publicRoot, { recursive: true, force: true });

for (const page of pages) {
  const target = page.slug ? `${page.slug}/index.html` : "index.html";
  writeFile(target, page.html);
  writePublic(target, page.html);
}

const stylesCss = `:root {
  --ink: #111814;
  --muted: #5d665f;
  --paper: #f6f7f0;
  --panel: #ffffff;
  --line: #d9ded2;
  --accent: #006b3f;
  --accent-dark: #06452d;
  --accent-soft: #e4f2e9;
  --gold: #d5a11e;
  --sky: #d6e9ff;
  --radius: 8px;
  --shadow: 0 20px 60px rgba(17, 24, 20, 0.09);
  color-scheme: light;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.55;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: var(--accent-dark);
  text-decoration-thickness: 0.08em;
  text-underline-offset: 0.18em;
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: var(--ink);
  color: #fff;
  padding: 0.75rem 1rem;
  z-index: 20;
}

.skip-link:focus {
  top: 1rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 72px;
  padding: 0.9rem clamp(1rem, 4vw, 3rem);
  background: rgba(246, 247, 240, 0.94);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--ink);
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  font-weight: 900;
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(0.6rem, 2vw, 1.4rem);
  flex-wrap: wrap;
  font-size: 0.95rem;
}

.site-nav a,
.site-footer nav a {
  color: var(--muted);
  text-decoration: none;
}

.site-nav a:hover,
.site-footer nav a:hover {
  color: var(--accent-dark);
}

.page-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.72fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4.5rem) clamp(1rem, 4vw, 3rem) 2rem;
}

.hero-copy h1 {
  max-width: 12ch;
  margin: 0;
  font-size: clamp(2.8rem, 8vw, 6.8rem);
  line-height: 0.94;
  letter-spacing: 0;
}

.hero-copy p:not(.eyebrow) {
  max-width: 62ch;
  margin: 1.3rem 0 0;
  color: var(--muted);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
}

.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.hero-media {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--panel);
  box-shadow: var(--shadow);
}

.hero-media img {
  width: 100%;
  height: clamp(260px, 45vw, 520px);
  object-fit: cover;
}

.hero-media figcaption {
  padding: 0.85rem 1rem;
  color: var(--muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--line);
}

.dashboard-band,
.section {
  max-width: 1240px;
  margin: 0 auto;
  padding: clamp(1.6rem, 4vw, 3rem) clamp(1rem, 4vw, 3rem);
}

.stat-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--line);
}

.stat-strip div {
  min-height: 112px;
  padding: 1.15rem;
  background: var(--panel);
}

.stat-strip span {
  display: block;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 900;
}

.stat-strip small,
.match-card small,
.city-grid small,
.link-tile small {
  color: var(--muted);
}

.notice {
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(0, 107, 63, 0.25);
  border-radius: var(--radius);
  background: var(--accent-soft);
}

.section-head {
  max-width: 760px;
  margin-bottom: 1.4rem;
}

.section h2,
.answer-panel h2 {
  margin: 0 0 0.7rem;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.05;
  letter-spacing: 0;
}

.section p,
.answer-panel p {
  color: var(--muted);
}

.match-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.match-card,
.option-grid article,
.city-grid article,
.link-tile,
.key-list,
.answer-panel {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
}

.match-card {
  padding: 1rem;
  min-height: 190px;
}

.match-card span,
.city-grid span {
  color: var(--accent-dark);
  font-weight: 800;
  font-size: 0.82rem;
  text-transform: uppercase;
}

.match-card h3,
.match-card h2,
.option-grid h3,
.city-grid h3 {
  margin: 0.65rem 0 0.5rem;
  line-height: 1.12;
}

.feature-card {
  min-height: 220px;
}

.split-section {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(320px, 1fr);
  gap: clamp(1.2rem, 4vw, 3rem);
  align-items: start;
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
}

table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
}

.compact table {
  min-width: 620px;
}

th,
td {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

th {
  background: #eef1e8;
  font-size: 0.82rem;
  text-transform: uppercase;
  color: var(--muted);
}

td span {
  display: block;
  color: var(--muted);
  font-size: 0.86rem;
}

tr:last-child td {
  border-bottom: 0;
}

.link-grid,
.option-grid,
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.link-tile,
.option-grid article,
.city-grid article {
  display: block;
  padding: 1.1rem;
  text-decoration: none;
}

.link-tile span {
  display: block;
  color: var(--ink);
  font-weight: 800;
}

.key-list {
  padding: 1.1rem;
}

.key-list p {
  margin: 0;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--line);
}

.key-list p:last-child {
  border-bottom: 0;
}

.source-panel {
  border-top: 1px solid var(--line);
}

.source-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.source-list li {
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line);
}

.tool-row {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 0.9rem;
  align-items: center;
  margin-bottom: 1rem;
}

.tool-row label {
  font-weight: 800;
}

.search-input {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 0.8rem 0.9rem;
  font: inherit;
  color: var(--ink);
  background: var(--panel);
}

.search-input:focus {
  outline: 3px solid rgba(0, 107, 63, 0.18);
  border-color: var(--accent);
}

.wide-photo {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
}

.wide-photo img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.answer-panel {
  max-width: 980px;
  margin: 2rem auto 0;
  padding: clamp(1.5rem, 5vw, 3rem);
}

.answer-panel p {
  margin: 0;
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  color: var(--ink);
  font-weight: 800;
}

.site-footer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: start;
  margin-top: 3rem;
  padding: 2rem clamp(1rem, 4vw, 3rem);
  border-top: 1px solid var(--line);
  background: #eef1e8;
}

.site-footer p {
  max-width: 720px;
  color: var(--muted);
}

.site-footer nav {
  display: grid;
  gap: 0.55rem;
}

@media (max-width: 980px) {
  .page-hero,
  .split-section,
  .site-footer {
    grid-template-columns: 1fr;
  }

  .match-list,
  .link-grid,
  .option-grid,
  .city-grid,
  .stat-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .site-header {
    position: static;
    align-items: flex-start;
    flex-direction: column;
  }

  .site-nav {
    justify-content: flex-start;
  }

  .hero-copy h1 {
    font-size: clamp(2.6rem, 16vw, 4.3rem);
  }

  .match-list,
  .link-grid,
  .option-grid,
  .city-grid,
  .stat-strip {
    grid-template-columns: 1fr;
  }

  .tool-row {
    grid-template-columns: 1fr;
  }

  .compact table {
    min-width: 0;
  }

  .compact th,
  .compact td {
    padding: 0.65rem 0.45rem;
    font-size: 0.88rem;
  }
}
`;

writeFile("styles.css", stylesCss);
writePublic("styles.css", stylesCss);

const appJs = `const input = document.querySelector("#schedule-search");
const table = document.querySelector("#schedule-table");

if (input && table) {
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const params = new URLSearchParams(window.location.search);
  if (params.has("q")) input.value = params.get("q") || "";

  const filterRows = () => {
    const query = input.value.trim().toLowerCase();
    for (const row of rows) {
      const text = row.textContent.toLowerCase();
      row.hidden = query.length > 0 && !text.includes(query);
    }
  };

  input.addEventListener("input", filterRows);
  filterRows();
}
`;

writeFile("app.js", appJs);
writePublic("app.js", appJs);

const urls = pages.map((page) => page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc><lastmod>2026-06-12</lastmod><changefreq>daily</changefreq><priority>${url === siteUrl + "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;

writeFile("sitemap.xml", sitemapXml);
writePublic("sitemap.xml", sitemapXml);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFile("robots.txt", robotsTxt);
writePublic("robots.txt", robotsTxt);

writeFile("README.md", `# 2026 Soccer Guide

Static SEO site for 2026soccerguide.info.

## Commands

- \`npm run build\` regenerates HTML, CSS, JS, sitemap, and robots files.
- \`npm run check\` validates the generated SEO surface.
- \`npm run serve\` starts a local preview at http://localhost:4173.

## Positioning

The site is an independent U.S. viewer guide for the 2026 World Cup. It focuses on schedule, where-to-watch intent, USA matches, host cities, and FAQ long-tail pages.
`);

console.log(`Generated ${pages.length} pages for 2026soccerguide.info`);
