const express = require("express");
const app = express();
const port = 3065;
require('dotenv').config();

// body-parser
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

// Router
const indexRouter = require('./routes');

// MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDB conected');
  })
  .catch((error) => {
    console.log(error);
  })

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
