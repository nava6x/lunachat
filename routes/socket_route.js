const socketIo = require('socket.io');
// require('dotenv').config();

// const frontend = process.env.FRONT_END

module.exports = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "https://6760688a222b23305dc967be--golden-douhua-9cb439.netlify.app", // Your frontend URL
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
