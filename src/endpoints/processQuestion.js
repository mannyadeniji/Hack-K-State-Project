const templates = require("../templates.js");
const dbService = require("../database");
var associatedText = "";

function processQuestion(req, res) {
  const db = dbService.getDbServiceInstance();

  console.log("You just submitted a question");
  //console.log(req.body.question);

  const question = req.body.question;
  const result = db.getPieceOfData();
  var associatedText = "";
  //console.log("Hey you " + result);
  var html = templates["questions.html"]({});
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);

  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
  //console.log("What is your name " + associatedText);
}

module.exports = processQuestion;
