//const http = require("http");
//const handleRequest = require("./src/handle-request");
const app = require("./src/app");
const cors = require("cors"); //Make API calls to the backend from the front end
const dotenv = require("dotenv");

const port = 3000;

app.listen(port, () => {
  console.log("Server is Listening on port " + port);
});

/*var express = require("express");
var app = express();



//Change the './' to point to the root of your angular app
app.use(express.static(path.resolve("./")));

//Send everything to your index.html page
app.get("/*", function (req, res) {
  res.sendFile(path.resolve("./index.html"));
});*/

/*var server = http.createServer(handleRequest);

server.listen(port, function () {
  console.log("Server is listening on port " + port);
});*/
