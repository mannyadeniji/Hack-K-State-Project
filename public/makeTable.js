//const dotenv = require("dotenv");
//dotenv.config();
//const dbService = require("../database");

//const { response } = require("../src/app");

/*document.addEventListener("DOMContentLoaded", async function () {
  fetch("http://localhost:3000/getQuestions", {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("Hey what is going on");
      response.json().then((data) => {
        console.log(data);
        loadHTMLTable(data["data"]);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});*/

document.addEventListener("DOMContentLoaded", async function (req, res) {
  fetch("http://localhost:3000/getQuestions").then((response) => {
    console.log("Hey what is going on");
    response.json().then((data) => {
      loadHTMLTable(data);
    });
  });
});

function loadHTMLTable(data) {
  console.log(data);
  //var current = data.properties.periods[0];
  var table = document.getElementById("textTable");
  table.style.border = "3px solid black";
  data.forEach((IDs) => {
    let row2 = table.insertRow();
    for (key in IDs) {
      const string = String(IDs[key]);
      let cell = row2.insertCell();
      var text = string.substring(0, 45);
      cell.style.border = "1px solid black";
      let sometext = document.createTextNode(text);
      cell.appendChild(sometext);
    }
    let cell2 = row2.insertCell();
    var button = document.createElement("button");
    var buttonText = document.createTextNode("Ask Me Anything!!!");
    button.appendChild(buttonText);
    cell2.style.border = "1px solid black";
    cell2.appendChild(button);
  });

  let thead = table.createTHead();
  let row = thead.insertRow();
  let tableLabels = Object.keys(data[0]);
  for (let key of tableLabels) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    th.style.border = "1px solid black";
    row.appendChild(th);
  }
  let th2 = document.createElement("th");
  let btntext = document.createTextNode("Choose Text");
  th2.appendChild(btntext);
  th2.style.border = "1px solid black";
  row.appendChild(th2);
}
