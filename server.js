const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db.json")

const PORT = 3001 || process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
});

app.get("/api/notes", (req, res) => {
    let results = notes

    res.json(results)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})