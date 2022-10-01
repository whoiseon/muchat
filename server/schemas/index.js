const mongoose = require('mongoose');
const dayjs = require('dayjs');
require('dotenv').config();

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(process.env.MONGODB_URL, {
    dbName: 'muchat',
  }, (error) => {
    if (error) {
      console.log('MongoDB connection error', error);
    } else {
      console.log('MongoDB connected');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB connection has been lost, Retry the connection')
});

module.exports = connect;
