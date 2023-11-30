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
  let table2 = "";
  data.forEach((team, index) => {
    let position = index + 1;
    var output =
      '<div class="rang"><div class="tablebegin"><div class="TeamRang">' +
      position +
      '</div><div class="TeamLogo"><img class="team_logo" src=" ' +
      team.teamIconUrl +
      '"/>' +
      '</div><div class="TeamName"><a href="team.html?teamid=' +
      team.teamInfoId +
      '">' +
      team.teamName +
      "</a>" +
      '</div></div><div class="punkte">' +
      team.points +
      "</div> </div>";
    if (index < 6) table += output;
    else if (index > 5) table2 += output;
  });
  document.getElementById("leaguetable").innerHTML = table;
  document.getElementById("leaguetable2").innerHTML = table2;
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
