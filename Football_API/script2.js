const loadData = () => {
  fetch("https://api.openligadb.de/getgoalgetters/öbl1/2023").then((result) => {
    result.json().then((data) => {
      fillTable(data);
    });
  });
};

const fillTable = (data) => {
  console.log(data);
  let table = "";
  let table2 = "";
  let table3 = "";
  for (let index = 1; index <= 1; index++) {
    data.forEach((goal, index) => {
      let position = index + 1;
      var output =
        '<div class="rang"><div class="tablebegin"><div class="TeamRang">' +
        position +
        '</div><div class="PlayerName">' +
        goal.goalGetterName +
        '</div><div class="Toranzahl">' +
        goal.goalCount +
        "</div></div></div>";

      if (index < 10) {
        table += output;
      } else if (index < 20) {
        table2 += output;
      } else if (index <= 29
    ) {
        table3 += output;
      }
    });
  }
  console.log(table);
  document.getElementById("leaguetable").innerHTML = table;

  document.getElementById("leaguetable2").innerHTML = table2;
  document.getElementById("leaguetable3").innerHTML = table3;
  console.log(table);
};

loadData();

/*
  <div class="rang">
            <div class="tablebegin">
              <div class="TeamRang">1.</div>
              <div class="PlayerName">Guido Burgstaller</div>
            </div>
            <div class="punkte">5</div>
          </div>
  */
