const templates = require("../templates.js");
const dbService = require("../database");
var associatedText = "";

//Asynchronous Function because db.getPieceOfData uses a promise
async function processQuestion(req, res) {
  const db = dbService.getDbServiceInstance();

  console.log("You just submitted a question");
  //console.log(req.body.question);

  if (req.body !== undefined) {
    const question = req.body.question;
    const result = await db.getPieceOfData(); //Stops processing code in the module until result is returned
    var associatedText = "";
  }

  var html = templates["questions.html"]({});
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.send(html);

  //{"data":[{"ID":35,"Text":"dgdfgdfgsdfgdsfgdsfgsd"}]}

  /*result
    .then((data) => res.send(html)) //Send html to the browser
    .catch((err) => console.log(err));*/
  //console.log("What is your name " + associatedText);
}

module.exports = processQuestion;
