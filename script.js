document.addEventListener("DOMContentLoaded", function() {
  const tablaContainer = document.getElementById("tabla-container");
  const tables = tablaContainer.querySelectorAll("table");
  let currentTableIndex = 0;

  function showNextTable() {
    tables[currentTableIndex].style.display = "none";
    currentTableIndex = (currentTableIndex + 1) % tables.length;
    tables[currentTableIndex].style.display = "table";
  }

  function showPreviousTable() {
    tables[currentTableIndex].style.display = "none";
    currentTableIndex = (currentTableIndex - 1 + tables.length) % tables.length;
    tables[currentTableIndex].style.display = "table";
  }

  document.getElementById("anterior-menu").addEventListener("click", showPreviousTable);
  document.getElementById("siguiente-menu").addEventListener("click", showNextTable);
});
