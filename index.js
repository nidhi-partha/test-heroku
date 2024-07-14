const express = require('express');
const path = require('path');
require('dotenv').config(); // Add this line to load the environment variables

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.OPENAI_API_KEY });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add other routes as necessary
// app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
