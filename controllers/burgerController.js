// --------------------------- DEPENDENCIES ------------------------------
var express = require("express");
var router = express.Router();

// Import model to use its db functions
var burger = require("../models/burger.js");

// ----------------------------- ROUTER.METHOD -----------------------------

// Landing page - goes directly to /burgers
router.get("/", function(req, res) {
  console.log("Successfully linked this file to server.js!");
  res.redirect("/burgers");
});

// NEED 3 ROUTES - GET, POST, PUT

// GET route - read all of the burgers in db when loading page
router.get("/burgers", function(req, res) {
  // express cb res by calling burger.selectAll
  burger.selectAll(function(burgerData) {
    // returns burger_data, renders to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// POST route - page will refresh when burger is added
// create = req.body
router.post("/burgers/create", function(req, res) {
  // input request to burger.insertOne
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// PUT route - update status of burger
// isolate by id = req.params
router.put("/burgers/:id", function(req, res) {
  var condition = "id= " + req.params.id;
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      console.log(result);
      // Send back AJAX 200 response -- req successfully processed on server
      res.sendStatus(200);
    }
  );
});

module.exports = router;
