//const dotenv = require("dotenv");
//dotenv.config();
//const dbService = require("../database");

const { response } = require("../src/app");

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/processQuestion")
    .then((response) => response.json())
    .then((data) => loadHTMLTable(data["data"]));
});

function loadHTMLTable(data) {
  console.log(data);
}
