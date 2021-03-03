var PORT = process.env.PORT || 3001;
var express = require("express");
var app = express();
var path = require("path");

// express middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(express.static("public"))

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

app.listen(PORT, function() {
    console.log("app is listening on port" + PORT)
})
