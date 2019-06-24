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

router.post("/add", (req, res) => {
  const burgerName = req.body.burger_name;
  orm.insertOne(burgerName, function(err, burger) {
    if (err) {
      return res.status(401).json({
        message: "Not able to add this burger"
      });
    }
    return res.json({
      burger_name: burgerName,
      id: burger.insertId,
      is_favorite: 0
    });
  });
});

module.exports = router;
