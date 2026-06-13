const fallbackFixtures = [
  {
    "dateKey": "2026-06-11",
    "date": "June 11",
    "time": "Time TBA",
    "match": "Mexico vs. South Africa",
    "group": "Group A",
    "venue": "Mexico City",
    "tv": "FOX, Telemundo, Tubi live/free"
  },
  {
    "dateKey": "2026-06-11",
    "date": "June 11",
    "time": "Time TBA",
    "match": "South Korea vs. Czechia",
    "group": "Group A",
    "venue": "Guadalajara",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-12",
    "date": "June 12",
    "time": "3:00 PM ET",
    "match": "Canada vs. Bosnia and Herzegovina",
    "group": "Group B",
    "venue": "Toronto",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-12",
    "date": "June 12",
    "time": "9:00 PM ET",
    "match": "USA vs. Paraguay",
    "group": "Group D",
    "venue": "Inglewood",
    "tv": "FOX, Telemundo, Tubi live/free"
  },
  {
    "dateKey": "2026-06-13",
    "date": "June 13",
    "time": "3:00 PM ET",
    "match": "Qatar vs. Switzerland",
    "group": "Group B",
    "venue": "San Francisco Bay Area",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-13",
    "date": "June 13",
    "time": "6:00 PM ET",
    "match": "Brazil vs. Morocco",
    "group": "Group C",
    "venue": "New York/New Jersey",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-13",
    "date": "June 13",
    "time": "9:00 PM ET",
    "match": "Haiti vs. Scotland",
    "group": "Group C",
    "venue": "Boston",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-14",
    "date": "June 14",
    "time": "12:00 AM ET",
    "match": "Australia vs. Turkey",
    "group": "Group D",
    "venue": "Vancouver",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-14",
    "date": "June 14",
    "time": "1:00 PM ET",
    "match": "Germany vs. Curacao",
    "group": "Group E",
    "venue": "Houston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-14",
    "date": "June 14",
    "time": "4:00 PM ET",
    "match": "Netherlands vs. Japan",
    "group": "Group F",
    "venue": "Dallas",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-14",
    "date": "June 14",
    "time": "7:00 PM ET",
    "match": "Ivory Coast vs. Ecuador",
    "group": "Group E",
    "venue": "Philadelphia",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-14",
    "date": "June 14",
    "time": "10:00 PM ET",
    "match": "Sweden vs. Tunisia",
    "group": "Group F",
    "venue": "Monterrey",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-15",
    "date": "June 15",
    "time": "12:00 PM ET",
    "match": "Spain vs. Cape Verde",
    "group": "Group H",
    "venue": "Atlanta",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-15",
    "date": "June 15",
    "time": "3:00 PM ET",
    "match": "Belgium vs. Egypt",
    "group": "Group G",
    "venue": "Seattle",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-15",
    "date": "June 15",
    "time": "6:00 PM ET",
    "match": "Saudi Arabia vs. Uruguay",
    "group": "Group H",
    "venue": "Miami",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-15",
    "date": "June 15",
    "time": "9:00 PM ET",
    "match": "Iran vs. New Zealand",
    "group": "Group G",
    "venue": "Inglewood",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-16",
    "date": "June 16",
    "time": "3:00 PM ET",
    "match": "France vs. Senegal",
    "group": "Group I",
    "venue": "New York/New Jersey",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-16",
    "date": "June 16",
    "time": "6:00 PM ET",
    "match": "Iraq vs. Norway",
    "group": "Group I",
    "venue": "Boston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-16",
    "date": "June 16",
    "time": "9:00 PM ET",
    "match": "Argentina vs. Algeria",
    "group": "Group J",
    "venue": "Kansas City",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-17",
    "date": "June 17",
    "time": "12:00 AM ET",
    "match": "Austria vs. Jordan",
    "group": "Group J",
    "venue": "San Francisco Bay Area",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-17",
    "date": "June 17",
    "time": "1:00 PM ET",
    "match": "Portugal vs. DR Congo",
    "group": "Group K",
    "venue": "Houston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-17",
    "date": "June 17",
    "time": "4:00 PM ET",
    "match": "England vs. Croatia",
    "group": "Group L",
    "venue": "Dallas",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-17",
    "date": "June 17",
    "time": "7:00 PM ET",
    "match": "Ghana vs. Panama",
    "group": "Group L",
    "venue": "Toronto",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-17",
    "date": "June 17",
    "time": "10:00 PM ET",
    "match": "Uzbekistan vs. Colombia",
    "group": "Group K",
    "venue": "Mexico City",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-18",
    "date": "June 18",
    "time": "12:00 PM ET",
    "match": "Czechia vs. South Africa",
    "group": "Group A",
    "venue": "Atlanta",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-18",
    "date": "June 18",
    "time": "3:00 PM ET",
    "match": "Switzerland vs. Bosnia and Herzegovina",
    "group": "Group B",
    "venue": "Los Angeles",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-18",
    "date": "June 18",
    "time": "6:00 PM ET",
    "match": "Canada vs. Qatar",
    "group": "Group B",
    "venue": "Vancouver",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-18",
    "date": "June 18",
    "time": "9:00 PM ET",
    "match": "Mexico vs. South Korea",
    "group": "Group A",
    "venue": "Guadalajara",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-19",
    "date": "June 19",
    "time": "3:00 PM ET",
    "match": "USA vs. Australia",
    "group": "Group D",
    "venue": "Seattle",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-19",
    "date": "June 19",
    "time": "6:00 PM ET",
    "match": "Scotland vs. Morocco",
    "group": "Group C",
    "venue": "Boston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-19",
    "date": "June 19",
    "time": "8:30 PM ET",
    "match": "Brazil vs. Haiti",
    "group": "Group C",
    "venue": "Philadelphia",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-19",
    "date": "June 19",
    "time": "11:00 PM ET",
    "match": "Turkey vs. Paraguay",
    "group": "Group D",
    "venue": "San Francisco Bay Area",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-20",
    "date": "June 20",
    "time": "1:00 PM ET",
    "match": "Netherlands vs. Sweden",
    "group": "Group F",
    "venue": "Houston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-20",
    "date": "June 20",
    "time": "4:00 PM ET",
    "match": "Germany vs. Ivory Coast",
    "group": "Group E",
    "venue": "Toronto",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-20",
    "date": "June 20",
    "time": "8:00 PM ET",
    "match": "Ecuador vs. Curacao",
    "group": "Group E",
    "venue": "Kansas City",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-21",
    "date": "June 21",
    "time": "12:00 AM ET",
    "match": "Tunisia vs. Japan",
    "group": "Group F",
    "venue": "Monterrey",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-21",
    "date": "June 21",
    "time": "12:00 PM ET",
    "match": "Spain vs. Saudi Arabia",
    "group": "Group H",
    "venue": "Atlanta",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-21",
    "date": "June 21",
    "time": "3:00 PM ET",
    "match": "Belgium vs. Iran",
    "group": "Group G",
    "venue": "Inglewood",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-21",
    "date": "June 21",
    "time": "6:00 PM ET",
    "match": "Uruguay vs. Cape Verde",
    "group": "Group H",
    "venue": "Miami",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-21",
    "date": "June 21",
    "time": "9:00 PM ET",
    "match": "New Zealand vs. Egypt",
    "group": "Group G",
    "venue": "Vancouver",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-22",
    "date": "June 22",
    "time": "1:00 PM ET",
    "match": "Argentina vs. Austria",
    "group": "Group J",
    "venue": "Dallas",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-22",
    "date": "June 22",
    "time": "5:00 PM ET",
    "match": "France vs. Iraq",
    "group": "Group I",
    "venue": "Philadelphia",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-22",
    "date": "June 22",
    "time": "8:00 PM ET",
    "match": "Norway vs. Senegal",
    "group": "Group I",
    "venue": "New York/New Jersey",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-22",
    "date": "June 22",
    "time": "11:00 PM ET",
    "match": "Jordan vs. Algeria",
    "group": "Group J",
    "venue": "San Francisco Bay Area",
    "tv": "FS1, Telemundo"
  },
  {
    "dateKey": "2026-06-23",
    "date": "June 23",
    "time": "1:00 PM ET",
    "match": "Portugal vs. Uzbekistan",
    "group": "Group K",
    "venue": "Houston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-23",
    "date": "June 23",
    "time": "4:00 PM ET",
    "match": "England vs. Ghana",
    "group": "Group L",
    "venue": "Boston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-23",
    "date": "June 23",
    "time": "7:00 PM ET",
    "match": "Panama vs. Croatia",
    "group": "Group L",
    "venue": "Toronto",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-23",
    "date": "June 23",
    "time": "10:00 PM ET",
    "match": "Colombia vs. DR Congo",
    "group": "Group K",
    "venue": "Guadalajara",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "3:00 PM ET",
    "match": "Canada vs. Switzerland",
    "group": "Group B",
    "venue": "Vancouver",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "3:00 PM ET",
    "match": "Bosnia and Herzegovina vs. Qatar",
    "group": "Group B",
    "venue": "Seattle",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "6:00 PM ET",
    "match": "Morocco vs. Haiti",
    "group": "Group C",
    "venue": "Atlanta",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "6:00 PM ET",
    "match": "Scotland vs. Brazil",
    "group": "Group C",
    "venue": "Miami",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "9:00 PM ET",
    "match": "Mexico vs. Czechia",
    "group": "Group A",
    "venue": "Mexico City",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-24",
    "date": "June 24",
    "time": "9:00 PM ET",
    "match": "South Korea vs. South Africa",
    "group": "Group A",
    "venue": "Monterrey",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "4:00 PM ET",
    "match": "Curacao vs. Ivory Coast",
    "group": "Group E",
    "venue": "Philadelphia",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "4:00 PM ET",
    "match": "Ecuador vs. Germany",
    "group": "Group E",
    "venue": "New York/New Jersey",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "7:00 PM ET",
    "match": "Tunisia vs. Netherlands",
    "group": "Group F",
    "venue": "Kansas City",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "7:00 PM ET",
    "match": "Japan vs. Sweden",
    "group": "Group F",
    "venue": "Dallas",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "10:00 PM ET",
    "match": "USA vs. Turkey",
    "group": "Group D",
    "venue": "Inglewood",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-25",
    "date": "June 25",
    "time": "10:00 PM ET",
    "match": "Paraguay vs. Australia",
    "group": "Group D",
    "venue": "San Francisco Bay Area",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "3:00 PM ET",
    "match": "Norway vs. France",
    "group": "Group I",
    "venue": "Boston",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "3:00 PM ET",
    "match": "Senegal vs. Iraq",
    "group": "Group I",
    "venue": "Toronto",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "8:00 PM ET",
    "match": "Uruguay vs. Spain",
    "group": "Group H",
    "venue": "Guadalajara",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "8:00 PM ET",
    "match": "Cape Verde vs. Saudi Arabia",
    "group": "Group H",
    "venue": "Houston",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "11:00 PM ET",
    "match": "New Zealand vs. Belgium",
    "group": "Group G",
    "venue": "Vancouver",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-26",
    "date": "June 26",
    "time": "11:00 PM ET",
    "match": "Egypt vs. Iran",
    "group": "Group G",
    "venue": "Seattle",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "5:00 PM ET",
    "match": "Panama vs. England",
    "group": "Group L",
    "venue": "New York/New Jersey",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "5:00 PM ET",
    "match": "Croatia vs. Ghana",
    "group": "Group L",
    "venue": "Philadelphia",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "7:30 PM ET",
    "match": "Colombia vs. Portugal",
    "group": "Group K",
    "venue": "Miami",
    "tv": "FOX, Telemundo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "7:30 PM ET",
    "match": "DR Congo vs. Uzbekistan",
    "group": "Group K",
    "venue": "Atlanta",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "10:00 PM ET",
    "match": "Algeria vs. Austria",
    "group": "Group J",
    "venue": "Kansas City",
    "tv": "FS1, Universo"
  },
  {
    "dateKey": "2026-06-27",
    "date": "June 27",
    "time": "10:00 PM ET",
    "match": "Jordan vs. Argentina",
    "group": "Group J",
    "venue": "Dallas",
    "tv": "FOX, Telemundo"
  }
];

const SCOREBOARD_URL = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard";

function partValue(parts, type) {
  const part = parts.find((item) => item.type === type);
  return part ? part.value : "";
}

function dateKeyFor(date, days = 0) {
  const shifted = new Date(date.getTime());
  shifted.setUTCDate(shifted.getUTCDate() + days);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(shifted);
  return partValue(parts, "year") + "-" + partValue(parts, "month") + "-" + partValue(parts, "day");
}

function compactDateKey(dateKey) {
  return String(dateKey || "").replace(/-/g, "");
}

function resolveDateKey(url) {
  const explicit = url.searchParams.get("date");
  if (/^\d{4}-\d{2}-\d{2}$/.test(explicit || "")) return explicit;
  const mode = url.searchParams.get("mode") || "today";
  if (mode === "tomorrow") return dateKeyFor(new Date(), 1);
  return dateKeyFor(new Date(), 0);
}

function formatKickoff(isoDate) {
  if (!isoDate) return "Time TBA";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(new Date(isoDate));
}

function venueName(competition) {
  const venue = competition && competition.venue;
  if (!venue) return "Venue TBA";
  const city = venue.address && venue.address.city ? venue.address.city : "";
  const country = venue.address && venue.address.country ? venue.address.country : "";
  return [venue.fullName, city, country].filter(Boolean).join(", ");
}

function mapEvent(event) {
  const competition = event.competitions && event.competitions[0] ? event.competitions[0] : {};
  const competitors = Array.isArray(competition.competitors) ? competition.competitors : [];
  const home = competitors.find((team) => team.homeAway === "home") || {};
  const away = competitors.find((team) => team.homeAway === "away") || {};
  const status = event.status && event.status.type ? event.status.type : {};
  const homeName = home.team && home.team.displayName ? home.team.displayName : "";
  const awayName = away.team && away.team.displayName ? away.team.displayName : "";
  const hasScore = home.score !== undefined && away.score !== undefined && (status.state === "in" || status.completed);
  const broadcasts = Array.isArray(competition.broadcasts)
    ? competition.broadcasts.flatMap((item) => Array.isArray(item.names) ? item.names : []).join(", ")
    : "";

  return {
    id: event.id,
    name: awayName && homeName ? awayName + " at " + homeName : event.name,
    shortName: event.shortName,
    date: event.date,
    time: formatKickoff(event.date),
    status: status.shortDetail || status.detail || status.description || "Scheduled",
    score: hasScore ? away.score + "-" + home.score : "",
    homeTeam: homeName,
    awayTeam: awayName,
    venue: venueName(competition),
    broadcasts,
    source: "ESPN public scoreboard"
  };
}

function fallbackFor(dateKey) {
  return fallbackFixtures
    .filter((fixture) => fixture.dateKey === dateKey)
    .map((fixture, index) => ({
      id: "fallback-" + dateKey + "-" + index,
      name: fixture.match,
      shortName: fixture.match,
      date: fixture.dateKey,
      time: fixture.time,
      status: "Scheduled",
      score: "",
      homeTeam: "",
      awayTeam: "",
      venue: fixture.venue,
      broadcasts: fixture.tv,
      source: "Static fallback schedule"
    }));
}

module.exports = async function handler(req, res) {
  const host = req.headers.host || "2026soccerguide.info";
  const url = new URL(req.url || "/api/live-matches", "https://" + host);
  const dateKey = resolveDateKey(url);
  const endpoint = SCOREBOARD_URL + "?dates=" + compactDateKey(dateKey);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");

  try {
    const response = await fetch(endpoint, { headers: { "accept": "application/json" } });
    if (!response.ok) throw new Error("Scoreboard HTTP " + response.status);
    const payload = await response.json();
    const events = Array.isArray(payload.events) ? payload.events.map(mapEvent) : [];
    res.status(200).json({
      mode: url.searchParams.get("mode") || "today",
      dateKey,
      source: "ESPN public scoreboard",
      updated: new Date().toISOString(),
      updatedLabel: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      events: events.length ? events : fallbackFor(dateKey)
    });
  } catch (error) {
    res.status(200).json({
      mode: url.searchParams.get("mode") || "today",
      dateKey,
      source: "Static fallback schedule",
      updated: new Date().toISOString(),
      updatedLabel: "from fallback schedule",
      error: error.message,
      events: fallbackFor(dateKey)
    });
  }
};
