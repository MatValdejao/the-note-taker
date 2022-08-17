const fs = require("fs");
const path = require("path");
const notesArray = require("../Develop/db/db.json");

const createNewNote = (body, notesArray) => {
	const note = body;
	notesArray.push(note);

	fs.writeFileSync(
		path.join(__dirname, "../Develop/db/db.json"),
		JSON.stringify({ note: notesArray }, null, 2)
    );
};


createNewNote("Hello", notesArray);
