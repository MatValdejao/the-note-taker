const express = require("express");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const PORT = Process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sets static files path
app.use(express.static("Develop/public"))
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
