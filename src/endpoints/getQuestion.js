const templates = require("../templates.js");
const dbService = require("../database");
var associatedText = "";

function processQuestion(req, res) {
  console.log(req.data);
  //console.log(req.body.question);

  var html = templates["questions.html"]({});
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
  //console.log("What is your name " + associatedText);
}

module.exports = processQuestion;
