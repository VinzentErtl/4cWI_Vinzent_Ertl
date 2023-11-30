const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("teamid");
laodTeamWithId();

function laodTeamWithId() {
  fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((result) => {
    result.json().then((data) => {
      console.log("result:", data);
      let result = data.filter((el) => el.teamInfoId == myParam);
      console.log("result:", result);
      if (result.length > 0) {
        printTeam(result[0]);
      } else {
        printError();
      }
    });
  });
}

function printTeam(team) {
  let html =
    ` <div class="NAMEMama">` +
    team.teamName +
    `</div>
    <div class="TeamFOTO">` +
    `<img src="`+team.teamIconUrl +
    `"></div>`;
  document.getElementById("team").innerHTML = html;
}

function printError() {
  document.getElementById("team").innerHTML = "leider schneider";
}
