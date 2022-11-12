const SocketIO = require('socket.io');

module.exports = (server, app) => {
  const io = SocketIO(server, {
    cors: {
      origin: '*',
    }
  });
  app.set('io', io); // req.app.get('io')
  const muchat = io.of('/muchat');

  muchat.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('새로운 클라이언트 접속', ip, socket.id, req.ip);

    socket.on('roomCode', (data) => {
      socket.join(data.code);

      socket.to(data.code).emit('join', {
        user: 'system',
        chat: 'hello',
      })
    });

    socket.on('disconnect', () => {
      console.log('클라이언트 접속 해제', ip, socket.id);
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
