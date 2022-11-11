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

    if (!code) {
      return res.status(400).json({
        errors: {
          message: "존재하지 않는 방입니다",
        },
      });
    }

    return res.status(200).json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
