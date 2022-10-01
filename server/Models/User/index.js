const mongoose = require('mongoose');

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
    default: Date.now,
  },
  mucorn: {
    type: String,
    default: '1001',
  },
  openedChat: {
    type: Array,
    default: [],
  },
  membership: {
    type: Array,
    default: [],
  }
});

module.exports = mongoose.model('user', userSchema)