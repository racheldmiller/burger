// Import ORM to create functions that'll interact w/ db
var orm = require("../config/orm.js");

// Reference naming conventions from orm.js
// NTS: Citing objColVals, cols, vals from orm.js doesn't seem to work

// Reminder: db table is called "burgers"
var burger = {
  // for GET : select all burgers
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // for POST : insert burger
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  // insertOne: function(cols, vals, cb) {
  //   orm.insertOne("burgers", cols, vals, function(res) {
  //   cb(res);
  //   });
  updateOne: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
  // updateOne: function(objColVals, condition, cb) {
  // orm.updateOne("burgers", objColVals, condition, function(res) {
  // cb(res);
  // });
};

// Export db functions for controller
module.exports = burger;
