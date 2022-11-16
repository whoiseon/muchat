const SocketIO = require('socket.io');

module.exports = (server, app) => {
  const io = SocketIO(server, {
    cors: {
      origin: '*',
    }
  });
  app.set('io', io); // req.app.get('io')
  const chat = io.of('/chat');

  chat.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);


    socket.on('join_room', (data) => {
      socket.join(data.roomId);

      socket.channel = data.roomId;

      console.log(`User with Id: ${socket.id} joined room: ${data.roomId}`);
    });

    socket.on('send_message', (data) => {
      console.log(data);
      chat.in(socket.channel).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
      console.log(`User Disconnected, ${socket.id}`);
    })
  })
};
