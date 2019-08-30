// Import ORM to create functions that'll interact w/ db
var orm = require("../config/orm.js");

var burger = {
  selectAllBurgers: function(cb) {
    orm.selectAllBurgers("burgers", function(res) {
      cb(res);
    });
  },
  insertBurger: function(name, cb) {
    orm.insertBurger("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  updateBurger: function(id, cb) {
    var condition = "id=" + id;
    orm.updateBurger(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

// var burger = {
//   // select all burgers
//   selectAllBurgers: function(cb) {
//     orm.selectAllBurgers("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // insert (create) burger
//   insertBurger: function(cols, vals, cb) {
//     orm.insertBurger("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   // update burger
//   updateBurger: function(objColVals, condition, cb) {
//     orm.updateBurger("burgers,", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export db functions for controller
module.exports = burger;
