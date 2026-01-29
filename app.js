const search = document.getElementById("search");
const results = document.getElementById("results");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  results.innerHTML = "";

  entries
    .filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.info.toLowerCase().includes(q)
    )
    .forEach(e => {
      results.innerHTML += <p><b>${e.name}</b>: ${e.info}</p>;
    });
});
