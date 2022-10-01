const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: dayjs().format(),
  }
});
