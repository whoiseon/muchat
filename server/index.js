const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3065;
const websocketPort = 3075;
const cors = require('cors');
require('dotenv').config();

// Cors
app.use(cors({
  origin: true,
  credentials: true,
}));

// socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('접속');

  socket.on('message', (data) => {
    console.log(data);
  })
})

// body-parser
app.use(express.json());
app.use(express.urlencoded( { extended : true } ));

// cookie-parser
app.use(cookieParser());

// Mongoose
const connectDB = require('./Models');

// Routers
  // User
const indexRouter = require('./routes');
const registerRouter = require('./routes/api/user/register');
const loginRouter = require('./routes/api/user/login');
const AuthRouter = require('./routes/api/user/auth');
const logoutRouter = require('./routes/api/user/logout');
const updateNicknameRouter = require('./routes/api/user/update/nickname');
const updatePasswordRouter = require('./routes/api/user/update/password');

  // Chat
const createRouter = require('./routes/api/chat/create')
const loadChatsRouter = require('./routes/api/chat/chats');
const loadSupportersRouter = require('./routes/api/chat/supporters');
const loadChatByGenreRouter = require('./routes/api/chat/genres');
const loadChatDataRouter = require('./routes/api/chat/chat');
const chatAccessRouter = require('./routes/api/chat/access');
const chatClosedRouter = require('./routes/api/chat/closed');
const searchedChatRouter = require('./routes/api/chat/search');


// MongoDB connection
connectDB();

// Routes

  // User
app.use('/', indexRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/update/nickname', updateNicknameRouter);
app.use('/api/update/password', updatePasswordRouter);

  // Chat
app.use('/api/create', createRouter);
app.use('/api/chats', loadChatsRouter);
app.use('/api/supporters', loadSupportersRouter);
app.use('/api/genres', loadChatByGenreRouter);
app.use('/api/chat', loadChatDataRouter);
app.use('/api/chat/access', chatAccessRouter);
app.use('/api/chat/closed', chatClosedRouter);
app.use('/api/chat/search', searchedChatRouter);

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});

io.listen(websocketPort, () => {
  console.log(`Listening on Websocket Port is ${websocketPort}`);
});
