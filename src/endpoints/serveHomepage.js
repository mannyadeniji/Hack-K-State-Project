//const db = require("../database");
//import fetch from "node-fetch";
const templates = require("../templates.js");
const dbService = require("../database");
const fetch = require("node-fetch");
/** @function homepage
 * Serves the home page
 * @param {http.IncomingMessage} req - the request object
 * @param {http.ServerResponse} res - the response object
 */

async function serveHomepage(req, res) {
  const db = dbService.getDbServiceInstance();

  var html = templates["home.html"]({
    name: "SocraQ",
  });
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

module.exports = serveHomepage;
