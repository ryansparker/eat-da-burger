var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var dotenv = require("dotenv").config();

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

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  // JAWSDB
  if(process.env.JAWSDB_URL) {
    connection =mysql.createConnection(process.env.JAWSDB_URL);
  }else {
    connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'hacktheplanet',
database: 'todoagain_db'
    });
  };

  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });