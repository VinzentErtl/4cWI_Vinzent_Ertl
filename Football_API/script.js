const loadData = () => {
  fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((result) => {
    result.json().then((data) => {
      fillTable(data);
    });
  });
};

const fillTable = (data) => {
  console.log(data);
  let table = "";
  data.forEach((team, index) => {
    let position = index + 1;
    var output =
      '<div class="rang"><div class="tablebegin"><div class="TeamRang">' +
      position +
      '</div><div class="TeamLogo"><img class="team_logo" src=" ' +
      team.teamIconUrl +
      '"/>' +
      '</div><div class="TeamName"><a href="RBSalz.html">' +
      team.teamName +
      '</a>' +
      '</div></div><div class="punkte">' +
      team.points +
      '</div> </div>';
    table += output;
  });
  document.getElementById("leaguetable").innerHTML = table;
  console.log(table);
};

loadData();

/*

<div class="rang">
            <div class="tablebegin">
              <div class="TeamRang">1.</div>
              <div class="TeamLogo">
                <img class="team_logo" src="RB.png" alt="" />
              </div>
              <div class="TeamName"><a href="RBSalz.html">RedBull Salzburg</a></div>
            </div>
            <div class="punkte">22</div>
          </div>
*/
