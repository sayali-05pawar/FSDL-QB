const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require("./config/db");
const participantRoutes = require("./routes/participantRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static HTML
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.use("/api", participantRoutes);

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});