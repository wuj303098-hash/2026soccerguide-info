const input = document.querySelector("#schedule-search");
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

const escapeText = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[char]));

const livePanels = Array.from(document.querySelectorAll("[data-live-matches]"));

function eventText(event) {
  return [
    event.name,
    event.shortName,
    event.homeTeam,
    event.awayTeam,
    event.venue,
    event.status
  ].join(" ").toLowerCase();
}

function matchesFilter(event, filter) {
  const terms = String(filter || "").toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const text = eventText(event);
  return terms.every((term) => text.includes(term));
}

function renderLiveCard(event) {
  const score = event.score || "Score pending";
  return '<article class="match-card live-card">' +
    '<span>' + escapeText(event.status || "Scheduled") + '</span>' +
    '<h3>' + escapeText(event.name || event.shortName || "World Cup match") + '</h3>' +
    '<p><strong class="score-line">' + escapeText(score) + '</strong></p>' +
    '<p>' + escapeText(event.time || "Time TBA") + ' | ' + escapeText(event.venue || "Venue TBA") + '</p>' +
    '<small>' + escapeText(event.broadcasts || event.source || "Check official listings") + '</small>' +
  '</article>';
}

async function refreshLivePanel(panel) {
  const mode = panel.dataset.mode || "today";
  const filter = panel.dataset.matchFilter || "";
  const status = panel.querySelector("[data-live-status]");
  const list = panel.querySelector("[data-live-list]");
  if (!list) return;

  try {
    const date = panel.dataset.date || "";
    const query = new URLSearchParams({ mode: mode });
    if (date) query.set("date", date);
    const response = await fetch("/api/live-matches?" + query.toString(), { cache: "no-store" });
    if (!response.ok) throw new Error("Live endpoint returned " + response.status);
    const payload = await response.json();
    const events = Array.isArray(payload.events) ? payload.events.filter((event) => matchesFilter(event, filter)) : [];
    if (events.length) {
      list.innerHTML = events.map(renderLiveCard).join("");
      if (status) status.textContent = "Live data updated " + (payload.updatedLabel || "now");
      return;
    }
    if (status) status.textContent = filter ? "No matching live score right now; showing schedule fallback." : "No live score rows right now; showing schedule fallback.";
  } catch (error) {
    if (status) status.textContent = "Live source unavailable; showing schedule fallback.";
  }
}

for (const panel of livePanels) {
  refreshLivePanel(panel);
  window.setInterval(() => refreshLivePanel(panel), 60000);
}
