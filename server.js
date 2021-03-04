var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var PORT = process.env.PORT || 3001;


// Express middleware
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
app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json", "utf-8", function(err, data){
        if (err) throw err
        var notes = JSON.parse(data)
       res.json(notes);
    })
  });
app.listen(PORT, function() {
    console.log("app is listening on port" + PORT)
})
// POST method route 
app.post("/api/notes", function(req, res) {

    let newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);

    // This function will write the note into db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
        if (err) throw (err);        
    });
    res.json(data);    
});

// This function deletes notes from the list 
app.delete("/api/notes/:id", function(req, res) {

    let noteId = req.params.id;
    let newId = 0;
    console.log(`Deleting note with id ${noteId}`);
    data = data.filter(currentNote => {
       return currentNote.id != noteId;
    });
    for (currentNote of data) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
}); 
