const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const socketRoutes = require('./routes/socket_route'); // Import the socketRoutes module
// require('dotenv').config();

// const frontend = process.env.FRONT_END
const app = express();

// Enable CORS for the HTTP part
app.use(cors({
  origin: 'https://67609b0d222b238241c9681a--golden-douhua-9cb439.netlify.app/', // Netlify URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Create an HTTP server with Express
const server = http.createServer(app);

// Use the socketRoutes to handle Socket.io functionality
socketRoutes(server);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a GET API response!' });
});

// Start the server
server.listen(1200, () => {
  console.log('Server running on http://localhost:1200');
});
