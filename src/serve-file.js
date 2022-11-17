const path = require("path");
const fs = require("fs");
const pathToMimeType = require("./path-to-mime-type.js");

function serveFile(req, res) {
  //gets the path name from the request object
  //and joins it with 'static'
  var pathname = new URL(req.url, "http://localhost").pathname;
  var filePath = path.join("public", pathname);
  fs.readFile(filePath, function (err, body) {
    if (err) {
      console.error(err);
      res.statusCode = 404;
      res.statusMesage = "Not Found ugggh";
      res.end();
      return;
    }
    res.setHeader("Content-Length", body.length);
    res.setHeader("Content-Type", pathToMimeType(filePath));
    res.end(body);
  });
}
module.exports = serveFile;
