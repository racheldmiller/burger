// --------------------------- DEPENDENCIES ------------------------------
var express = require("express");
var router = express.Router();

// Import model to use its db functions
var burger = require("../models/burger.js");

// ---------------------------- ROUTER.METHOD -------------------------------
// GET route [read]
router.get("/", function(req, res) {
  console.log("Successfully linked this file to server.js!");
  // express cb res by calling burger.selectAllBurgers
  burger.selectAllBurgers(function(burgerData) {
    console.log(burgerData);
    res.render("index");
    // return burger_data, render to index w/ handlebar
    // res.render("index", { burger_data: burgerData });
  });
});

// // POST route [create]
// // creating means it'll be req.body
// router.post("/", function(req, res) {
//   // take request obj and use it as input
//   burger.createBurger(req.body.burger_name, function(result) {
//     // return result to console
//     console.log(result);
//     // render to index w/ handle
//     res.redirect("/");
//   });
// });

// // PUT route [update]
// // if we're isolating by id, it needs to be req.params
// router.put("/:id", function(req, res) {
//   burger.updateBurger(req.params.id, function(result) {
//     // render to index w/ handle
//     console.log(result);
//     // send back response
//     res.sendStatus(200);
//   });
// });

// // Export router
module.exports = router;
