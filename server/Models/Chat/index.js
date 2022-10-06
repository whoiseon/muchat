const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const chatSchema = new Schema({
  manager: {
    type: ObjectId,
    required: true,
    ref: 'user'
  },
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  introduce: {
    type: String,
    required: true,
  },
  supporters: {
    type: Boolean,
    required: true,
    default: false,
  },
  member: {
    type: Array,
    default: [],
  },
  current: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('chat', chatSchema);
