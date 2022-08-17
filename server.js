const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db.json")

const PORT = 3001 || process.env.PORT

const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html route to display index onto page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

// html route to display notes onto page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
});

// deals with incorrect requests
app.get("*", (req, res) => {   
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
})

// gets notes json data
app.get("/api/notes", (req, res) => {
    let results = notes

    res.json(results)
})

// will post notes once added by user
app.post("/api/notes", (req, res) => {
    console.log(req.body)
    // sets an id to individual notes to keep track
    req.body.id = notes.length.toString()

    // creates note
    const note = createNewNote(req.body, notes)
    res.json(note)

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})