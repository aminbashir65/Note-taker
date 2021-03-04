const express = require("express");
const fs = require("fs");


// Express App
var app = express();
var PORT = process.env.PORT || 3001

// set up the Express middleware app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
