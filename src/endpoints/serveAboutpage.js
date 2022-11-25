//const db = require("../database");
const templates = require("../templates.js");
const dbService = require("../database");

/** @function homepage
 * Serves the home page
 * @param {http.IncomingMessage} req - the request object
 * @param {http.ServerResponse} res - the response object
 */
function serveAboutpage(req, res) {
  //Generate the page html
  //const db = dbService.getDbServiceInstance();
  //const result = db.getAllData();
  //console.log(result);

  var html = templates["about.html"]({
    name: "SocraQ",
  });
  // Serve the HTML
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

module.exports = serveAboutpage;
