const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

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
  },
  operatedChat: {
    type: Array,
    default: [],
  },
  role: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('user', userSchema);
