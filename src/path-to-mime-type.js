//will be used to get the extension from the path
const path = require("path");

function pathToMimeTye(filePath) {
  var extension = path.extname(filePath);
  switch (extension) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".png":
      return "image/png";
    case ".mp4":
      return "video/mp4";
    default:
      return "application/octet-stream";
  }
}

module.exports = pathToMimeTye;
