// add all database query (add, update, delete)

const connection = require("./connection");

// query all the database
const orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM restaurant_burger", function(err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  },
  insertOne: function(burgerName, cb) {
    const sqlQuery =
      "INSERT INTO restaurant_burger(burger_name) VALUES('{burgerName}')";
    connection.query(sqlQuery, function(err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  }
};

router.post("/add", (req, res) => {
  const burgerName = req.body.burger_name;
});

module.exports = orm;

// orm.selectAll
