const templates = require("../templates.js");
const dotenv = require("dotenv");
dotenv.config();
const dbService = require("../database");

async function submitText(req, res) {
  const db = dbService.getDbServiceInstance();
  console.log("Yo you just submitted some text");
  console.log(req.body);
  console.log(req.body.fullText);
  const newText = req.body.fullText;
  var id = await db.insertNewText(newText);
  var html = templates["questions.html"]({ textid: id });
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
  /*
  res.statusCode = 302;
  res.setHeader("Location", "/");
  res.end();*/
}

module.exports = submitText;
