const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const socketRoutes = require('./routes/socket_route'); // Import the socketRoutes module
require('dotenv').config();

const frontend = process.env.FRONT_END
const app = express();

// Enable CORS for the HTTP part
app.use(cors({
  origin: frontend, // Your frontend URL
  methods: ['GET', 'POST'],       // Allow specific methods
  allowedHeaders: ['Content-Type'],
}));

// Create an HTTP server with Express
const server = http.createServer(app);

// Use the socketRoutes to handle Socket.io functionality
socketRoutes(server);

// Start the server
server.listen(1200, () => {
  console.log('Server running on http://localhost:1200');
});