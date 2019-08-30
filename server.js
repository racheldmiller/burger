// ------------------------ DEPENDENCIES ----------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override"); // middleware

// Establish the app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Configure Express Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Need to reference routes
var routes = require("./controllers/burgerController.js");
app.use("/", routes); // Solve error by exporting controller file

// Start our server so it can start listening
app.listen(PORT, function() {
  // log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
