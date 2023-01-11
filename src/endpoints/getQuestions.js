const templates = require("../templates.js");
const dbService = require("../database");
var associatedText = "";

async function getQuestions(req, res) {
  //console.log(req.data);
  const db = dbService.getDbServiceInstance();
  const result = await db.getAllData();

  res.json(result);
  //console.log("What is your name " + associatedText);
}

module.exports = getQuestions;
