const fs = require("fs");
const path = require("path");
const serveFile = require("./serve-file");
/**@module listDirectory
 * Provides a function for serving a directory listening
 * for the directory matching the pathname in the req.url
 * If not found, serves a 404 status code.
 * @param {http.incomingMessage} req - the request object
 * @param {http.serverResponse} res - the response object
 */
function listDirectory(req, res) {
  var pathname = new URL(req.url, "http://localhost").pathname;
  var dirPath = path.join("public", pathname);
  fs.readdir(dirPath, (err, entries) => {
    if (err) {
      console.log(err);
      return res.writeHead(404).end("Not Found Whaaat");
    }
    if (entries.includes("index.html")) {
      req.url = path.join(req.url, "index.html");
      serveFile(req, res);
      return;
    }
    res
      .writeHeader(200, {
        "Content-Type": "text/html",
        "Content-Length": body.length,
      })
      .end();
  });
}
module.exports = listDirectory;
