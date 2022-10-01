const mongoose = require('mongoose');
const dayjs = require('dayjs');
require('dotenv').config();

const connect = async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'muchat',
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection error', error);
  }
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB connection has been lost, Retry the connection')
});

module.exports = connect;
