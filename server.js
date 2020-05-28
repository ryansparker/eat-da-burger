var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var dotenv = require("dotenv").config();

const db = require('./config/connection')

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var router = require("./controllers/burgers_controllers");
app.use(router);
  

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });