// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML)
app.use(express.static('public'));

// Handle login request
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace these values with more secure methods (e.g., database)
    const correctUsername = "UnGroupe";
    const correctPassword = "Summer2025";

    if (username === correctUsername && password === correctPassword) {
        res.send("Login successful!");
    } else {
        res.status(401).send("Invalid username or password.");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
