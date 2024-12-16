const socketIo = require('socket.io');
// require('dotenv').config();

const frontendUrl = process.env.FRONT_END || 'https://67609b0d222b238241c9681a--golden-douhua-9cb439.netlify.app/'

module.exports = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: frontendUrl,  // Use dynamic environment variable here
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  });

  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('sendMessage', (data) => {
      io.emit('newMessage', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
