/**@module app
 * ==>Express application for the website
 */
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const serveHomepage = require("./endpoints/serveHomepage");
const serveAboutpage = require("./endpoints/serveAboutpage");
const submitText = require("./endpoints/submitText");
const submitLink = require("./endpoints/submitLink");
const processQuestion = require("./endpoints/processQuestion");
const parseBody = require("./middleware/parse-body");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const dbService = require("./database");

var app = express();
app.use(cors());
app.use(morgan("dev"));
//app.use(loadSession);

app.get("/", serveHomepage);
app.get("/about", serveAboutpage);
app.post("/submitLink", parseBody, submitLink);
app.post("/submitText", parseBody, submitText);
app.post("/processQuestion", parseBody, processQuestion);
app.get("/processQuestion", serveHomepage);
//app.set('templates', path.join(__dirname, 'templates'));
//app.set('template engine', 'pug');
/*app.get("/signup", newUser);
app.get("/signin", newSession);
app.get("/users", listAllUsers);
app.post("/signup", parseBody, createUser);
app.get("/signout", destroySession);
app.post("/signin", parseBody, createSession);
app.get("/box-locations", serveBoxLocation);
app.get("/box-locations/create", newLocation);
app.post("/box-locations", parseBody, createLocation);
app.post("/box-locations/:id/requests", parseBody, createRequest);
app.get("/box-locations/:box_id/requests/:request_id/fulfill", markRequest);
app.get("/users/:user_id", editUser);
app.post("/users/:user_id", parseBody, changeUserInfo);
app.get("/box-locations/:id", showEachLocation);*/
app.use(express.static("public"));

module.exports = app;
