const express = require('express');
const User = require('../../../Models/User');
const Chat = require('../../../Models/Chat');
const router = express.Router();

router.get('/', async (req, res) => {
  const { genre } = req.query;

  try {
    const chatByGenre = await Chat.find({ genre })
      .sort({ createdAt: -1 }).populate('manager');

    console.log(chatByGenre);
    return res.status(200).json(chatByGenre);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
