require('dotenv').config();
const express = require('express');
const app = express();

// Environment variable for port
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.send("Application Deployed Successfully");
});

app.get('/status', (req, res) => {
    res.json({
        status: "running",
        environment: "production"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});