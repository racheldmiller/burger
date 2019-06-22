const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const routes = require("./routes/handlers");

const PORT = process.env.PORT || 8080;
const app = express();

// Parse application body as JSON
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Configure Express Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

// Start our server so it can start listening
app.listen(PORT, function() {
  // log (server-side) when our server has started
  console.log("Server listenng on: http://localhost:" + PORT);
});
