const express = require("express");
const app = express();
const port = 3065;
require('dotenv').config();

// Mongoose
const connect = require('./schemas');

// Routers
const indexRouter = require('./routes');

// body-parser
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));


// MongoDB
connect();

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
