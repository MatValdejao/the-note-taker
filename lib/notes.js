const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArray) => {
	const note = body;
    notesArray.push(note);

    // writes into local json file
	fs.writeFileSync(
		path.join(__dirname, "../Develop/db/db.json"),
		JSON.stringify({notes: notesArray}, null, 2)
    );

    return note
};

module.exports = createNewNote