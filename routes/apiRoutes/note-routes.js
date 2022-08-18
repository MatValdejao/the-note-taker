const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const { notes } = require("../../Develop/db/db.json");
const createNewNote = require("../../lib/notes");


// gets notes json data
router.get("/notes", (req, res) => {
	let results = notes;

	res.json(results);
});

// will post notes once added by user
router.post("/notes", (req, res) => {
	// sets an id to individual notes to keep track
    req.body.id = notes.length.toString();

	// creates note
	const note = createNewNote(req.body, notes);
    res.json(note);
});

// delete notes
router.delete("/notes/:id", (req, res) => {   
    // get query id provided
    const id = req.params.id 

    // ensures note exists
    if (req.body) {
        // goes through notes array to check which ID matches
        const noteIndex = notes.findIndex(index => index.id === id)
        notes.splice(noteIndex, 1)

        // updates notes json file
        fs.writeFileSync(path.join(__dirname, "../../Develop/db/db.json"), JSON.stringify({ notes: notes }), null, 2)
        
        // sends updated json
        return res.send(notes)
    } else {
        console.log("Note not found.")
        return
    }   
})

module.exports = router