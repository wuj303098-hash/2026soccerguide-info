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
