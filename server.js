const express = require("express");
const path = require("path");

const PORT = 3001 || process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})