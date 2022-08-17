const express = require("express");

const PORT = 3001 || process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})