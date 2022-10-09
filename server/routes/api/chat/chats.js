const express = require('express');
const Chat = require('../../../Models/Chat');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const chats = await Chat.find({}, {
      introduce: 0,
    }).sort({ createdAt: -1 }).populate('manager');

    return res.status(200).json(chats);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
