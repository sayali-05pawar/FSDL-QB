const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const router = require('./routes/route');
const path = require('path');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// API routes
app.use('/api', router);

// 🔥 Serve HTML from views folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});