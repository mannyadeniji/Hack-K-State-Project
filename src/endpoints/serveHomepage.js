//const db = require("../database");
//import fetch from "node-fetch";
const templates = require("../templates.js");
const dbService = require("../database");

/** @function homepage
 * Serves the home page
 * @param {http.IncomingMessage} req - the request object
 * @param {http.ServerResponse} res - the response object
 */
async function serveHomepage(req, res) {
  const db = dbService.getDbServiceInstance();
  const result = await db.getAllData();
  loadHTMLTable(result);
  /*fetch("http://localhost:3000/getQuestions", {
    method: "POST",
    body: result,
  }).then(console.log("Done"));*/

  var html = templates["home.html"]({
    name: "SocraQ",
  });
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

function loadHTMLTable(data) {}

module.exports = serveHomepage;
