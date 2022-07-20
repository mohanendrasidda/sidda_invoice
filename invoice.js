// https://www.w3schools.com/howto/howto_js_sort_table.asp
// took the algorithm reference

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 4; i++) {
      shouldSwitch = false;

      x = rows[i]
        .getElementsByTagName("TD")
        [n].innerHTML.toLowerCase()
        .toString()
        .replace(/[₹]/g, "");
      y = rows[i + 1]
        .getElementsByTagName("TD")
        [n].innerHTML.toLowerCase()
        .toString()
        .replace(/[₹]/g, "");

      if (dir == "asc") {
        if (n == 0) {
          if (x > y) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (dir == "desc") {
        if (n == 0) {
          console.log(n);
          if (x < y) {
            shouldSwitch = true;
            break;
          }
        }
      }
      //   else if (dir == "asc") {
      //     if (n == 1 || n == 2 || n == 3) {
      //       console.log(n);
      //       if (Number(x) > Number(y)) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //     }
      //   } else if (dir == "desc") {
      //     if (n == 1 || n == 2 || n == 3) {
      //       console.log(n);
      //       if (Number(x) < Number(y)) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //     }
      //   }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumber(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;

  console.log(n);
  const val = n;
  table = document.getElementById("myTable");
  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 4; i++) {
      console.log(i);

      shouldSwitch = false;

      x = rows[i]
        .getElementsByTagName("TD")
        [val].innerHTML.toString()
        .replace(/[₹]/g, "");
      y = rows[i + 1]
        .getElementsByTagName("TD")
        [val].innerHTML.toString()
        .replace(/[₹]/g, "");

      console.log("x & y", x, y);
      if (dir == "asc") {
        if (Number(x) > Number(y)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x) < Number(y)) {
          shouldSwitch = true;
          break;
        }
      }
      console.log("x&y after:", x, y);
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
