const express = require('express');
const Chat = require('../../../Models/Chat');
const router = express.Router();

router.get('/', async (req, res) => {
  const { code } = req.query;
  try {
    const chatData = await Chat.findOne({ code }).populate({
      path: "manager",
      select: {
        nickname: 1,
        mucorn: 1,
      }
    });

    return res.status(200).json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
