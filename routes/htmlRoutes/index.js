const path = require("path")
const router = require("express").Router()

// html route to display index.html onto page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../Develop/public/index.html"));
});

// html route to display notes onto page
router.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "../../Develop/public/notes.html"));
});

// deals with incorrect requests
router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../Develop/public/index.html"));
});

module.exports = router