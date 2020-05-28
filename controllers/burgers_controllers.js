var express = require("express");
var exphbs = require("express-handlebars");
var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
  burgers.all().then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
})

router.post("/api/burgers", function(req, res) {
  burgers.insert(req.body)
    .then(function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
  burgers.update(
    req.params.id,
    {
      devoured: req.body.devoured
    }).then(function(result) {
      console.log(result)
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    })
})

// Export routes for server.js to use.
module.exports = router;