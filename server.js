// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Express Server
let app = express();
// Set Initial Port
let PORT = process.env.PORT || 8080;

// Static Content from "public" Directory
app.use(express.static(path.join(__dirname, "./app/public")));

// Parse Application Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Import Routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join.text());

// Start Server
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});