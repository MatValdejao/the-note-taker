const express = require("express");
const fs = require("fs")
const path = require("path");
const { notes } = require("./Develop/db/db.json");
const createNewNote = require("./lib/notes");

const PORT = 3001 || process.env.PORT;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sets static files path
app.use(express.static("Develop/public"))

// html route to display index.html onto page
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

// html route to display notes onto page
app.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// gets notes json data
app.get("/api/notes", (req, res) => {
	let results = notes;

	res.json(results);
});

// will post notes once added by user
app.post("/api/notes", (req, res) => {
	// sets an id to individual notes to keep track
    req.body.id = notes.length.toString();

	// creates note
	const note = createNewNote(req.body, notes);
    res.json(note);
});

// delete notes
app.delete(`/api/notes/:id`, (req, res) => {   
    // reconcile between length and indexing
    const id = req.params.id + 1

    // ensures note exists
    if (req.body) {
        // goes through notes array to check which ID matches
        const noteIndex = notes.findIndex(index => index.id === id)
        notes.splice(noteIndex, 1)

        // updates notes json file
        fs.writeFileSync(path.join(__dirname, "./Develop/db/db.json"), JSON.stringify({ notes: notes }), null, 2)
        
        // sends updated json
        return res.send(notes)
    } else {
        console.log("Note not found.")
        return
    }   
})

// deals with incorrect requests
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
