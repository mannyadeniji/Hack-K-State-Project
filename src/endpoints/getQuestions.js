const templates = require("../templates.js");
const dbService = require("../database");
var associatedText = "";

async function getQuestions(req, res) {
  //console.log(req.data);
  const db = dbService.getDbServiceInstance();
  console.log("You are getting all the questions");
  //console.log(req.body.question);
  const result = await db.getAllData();

  console.log(result);
  res.setHeader("Content-Type", "application/json");
  res.end(result);
  //console.log("What is your name " + associatedText);
}

module.exports = getQuestions;
