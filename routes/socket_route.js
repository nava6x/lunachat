const socketIo = require('socket.io');
// require('dotenv').config();

const frontendUrl = process.env.FRONT_END || 'https://6760688a222b23305dc967be--golden-douhua-9cb439.netlify.app'; 

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
