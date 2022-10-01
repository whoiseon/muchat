const express = require("express");
const app = express();
const port = 3065;
const cors = require('cors');
require('dotenv').config();

// Cors
app.use(cors());

// Mongoose
const connectDB = require('./Models');

// Routers
const indexRouter = require('./routes');
const registerRouter = require('./routes/api/register');

// body-parser
app.use(express.json());
app.use(express.urlencoded( { extended : true } ));

// MongoDB connection
connectDB();

// Routes
app.use('/', indexRouter);
app.use('/api/register', registerRouter);

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
