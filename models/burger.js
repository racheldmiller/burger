// // Import ORM to create functions that'll interact w/ db
// var orm = require("../config/orm");

// var burger = {
//   // select all burgers
//   selectAllBurgers: function(cb) {
//     orm.selectAllBurgers("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // create burger
//   createBurger: function(cols, vals, cb) {
//     orm.createBurger("burgers", cols, vals, function(res) {
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

// // Export db functions for contrller
// module.exports = burger;
