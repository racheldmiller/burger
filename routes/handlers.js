const express = require("express");
const router = express.Router();

const orm = require("../config/orm");
router.get("/", function(req, res) {
  //   res.json({
  //     message: "Hello, world"
  //   });

  orm.selectAll(function(err, burgers) {
    if (err) {
      return res.status(501).json({
        message: "not able to query the database"
      });
    }
    console.log("burgers: ", burgers);
    res.render("index", { burgers, style: "index" });
  });
});

module.exports = router;
