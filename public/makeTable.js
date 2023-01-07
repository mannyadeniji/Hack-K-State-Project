//const dotenv = require("dotenv");
//dotenv.config();
//const dbService = require("../database");

//const { response } = require("../src/app");

document.addEventListener("DOMContentLoaded", async function () {
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
});

function loadHTMLTable(data) {
  console.log(data);
}
