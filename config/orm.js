// ORM = OBJECT RELATIONAL MAPPER

// // Import MySQL connection
// var connection = require("./connection.js");

// // ------------------- HELPER FUNCTIONS FOR SQL SYNTAX --------------------------
// // Print question marks
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// }

// // Obj to Sql
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     arr.push(key + "=" + ob[key]);
//   }
//   return arr.toString();
// }

// // ---------------------- ORM SQL STATEMENTS [CRUD...ish] -----------------------

// var orm = {
//   // READ ALL BURGERS
//   selectAllBurgers: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

//   // CREATE A BURGER
//   createBurger: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

//   // UPDATE A BURGER
//   updateBurger: function(table, objColVals, condition, cb) {
//     // objColVals = columns & values to update
//     // i.e. {name: Lassie, sleepy: true}
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }
// };

// // Export ORM for model
// module.exports = orm;
