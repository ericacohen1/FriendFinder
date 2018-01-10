var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// NEED TO ADD MORE HERE...
// Sets up the Express app to handle data parsing
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: false }));
// tells the system I want to user json
app.use(bodyParser.json());


app.use(express.static("app"));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });