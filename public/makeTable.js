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

//Get user submitted text from the database
document.addEventListener("DOMContentLoaded", async function (req, res) {
  fetch("http://localhost:3000/getQuestions").then((response) => {
    response.json().then((data) => {
      loadHTMLTable(data);
    });
  });
});

function loadHTMLTable(data) {
  console.log(data);
  var count = 0;
  //var current = data.properties.periods[0];
  var table = document.getElementById("textTable");
  //table.style.border = "3px solid black";

  data.forEach((IDs) => {
    //Create a row for each text entry
    let row2 = table.insertRow();

    //Create a button for each text entry
    var button = document.createElement("button");

    var textString = "Hello";

    //For each text entry create a cell to hold the text
    //Insert the cell into the row
    for (key in IDs) {
      const string = String(IDs[key]);
      textString = string;
      let cell = row2.insertCell();
      var text = string.substring(0, 45);
      //cell.style.border = "1px solid black";
      let sometext = document.createTextNode(text);
      cell.appendChild(sometext);
    }

    //Create cell to hold the button that goes into the row
    let cell2 = row2.insertCell();
    //Add text to the button as well as an event listener
    var buttonText = document.createTextNode("Ask Me Anything!!!");
    button.appendChild(buttonText);
    button.addEventListener("click", function () {
      goToNewPage(textString);
    });
    //add the button to the cell
    cell2.appendChild(button);

    //makes the background of every other row gray
    if (count % 2 == 1) {
      row2.className = "table-secondary";
    }
    count++;
  });

  let thead = table.createTHead();
  let row = thead.insertRow();
  let tableLabels = Object.keys(data[0]);
  for (let key of tableLabels) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    //th.style.border = "1px solid black";
    row.appendChild(th);
  }
  let th2 = document.createElement("th");
  let btntext = document.createTextNode("Choose Text");
  th2.appendChild(btntext);
  //th2.style.border = "1px solid black";
  row.appendChild(th2);
}

function goToNewPage(data) {
  console.log("Hey what is going on");
  console.log(data);
  location.href = "/processQuestion";
}
