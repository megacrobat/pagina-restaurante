document.addEventListener("DOMContentLoaded", function() {
    const tablaContainer = document.getElementById("tabla-container");
    let currentTableIndex = 0;
    let startX;
  
    const tables = tablaContainer.querySelectorAll("table");
    const totalTables = tables.length;
  
    tables.forEach((table, index) => {
      if (index !== 0) {
        table.style.display = "none";
      }
    });
  
    tablaContainer.addEventListener("mousedown", function(event) {
      startX = event.pageX;
    });
  
    tablaContainer.addEventListener("mouseup", function(event) {
      const endX = event.pageX;
      if (endX > startX) {
        showPreviousTable();
      } else if (endX < startX) {
        showNextTable();
      }
    });
  
    function showNextTable() {
      tables[currentTableIndex].style.display = "none";
      currentTableIndex = (currentTableIndex + 1) % totalTables;
      tables[currentTableIndex].style.display = "table";
    }
  
    function showPreviousTable() {
      tables[currentTableIndex].style.display = "none";
      currentTableIndex = (currentTableIndex - 1 + totalTables) % totalTables;
      tables[currentTableIndex].style.display = "table";
    }
  });
  