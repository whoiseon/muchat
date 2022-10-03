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
const registerRouter = require('./routes/api/register');
const loginRouter = require('./routes/api/login');
const AuthRouter = require('./routes/api/auth');


// MongoDB connection
connectDB();

// Routes
app.use('/', indexRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/auth', AuthRouter);

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
