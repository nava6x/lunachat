const socketIo = require('socket.io');
// require('dotenv').config();

const frontendUrl = 'https://676097c6eaaae56a99aa5434--incredible-gingersnap-40bf5b.netlify.app/'; 

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
