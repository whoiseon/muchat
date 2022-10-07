const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3065;
const cors = require('cors');
require('dotenv').config();

// Cors
app.use(cors({
  origin: true,
  credentials: true,
}));

// body-parser
app.use(express.json());
app.use(express.urlencoded( { extended : true } ));

// cookie-parser
app.use(cookieParser());

// Mongoose
const connectDB = require('./Models');

// Routers
const indexRouter = require('./routes');
const registerRouter = require('./routes/api/user/register');
const loginRouter = require('./routes/api/user/login');
const AuthRouter = require('./routes/api/user/auth');
const logoutRouter = require('./routes/api/user/logout');
const createRouter = require('./routes/api/chat/create')
const loadChatsRouter = require('./routes/api/chat/chats');
const loadChatByGenreRouter = require('./routes/api/chat/genres');


// MongoDB connection
connectDB();

// Routes

  // User api
app.use('/', indexRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/logout', logoutRouter);

  // Chat api
app.use('/api/create', createRouter);
app.use('/api/chats', loadChatsRouter);
app.use('/api/genres', loadChatByGenreRouter);


app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
