const express = require("express");

const PORT = 3001 || process.env.PORT

const app = express()

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})