const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const messageSchema = new Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  chat: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    required: true,
    ref: 'user'
  },
  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('message', messageSchema);