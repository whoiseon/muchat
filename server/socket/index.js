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
    const onlineList = [];

    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const roomId = socket.handshake.query.code;

    console.log('새로운 클라이언트 접속 ' + roomId);

    socket.join(roomId);

    socket.on('connection', (data) => {
      if (onlineList.filter((v) => v._id === data._id).length === 0) {
        onlineList.push(data);
      }

      socket.emit('onlineList', onlineList);
    });

    socket.on('message', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('클라이언트 접속 해제', ip, socket.id);
      socket.leave(roomId);
      clearInterval(socket.interval);
    });

    socket.on('error', (error) => {
      console.error(error);
    });

    socket.on('message', (data) => {
      io.emit('messageList', data);
    });
  })
};
