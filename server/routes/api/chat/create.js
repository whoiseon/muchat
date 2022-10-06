const express = require('express');
const User = require('../../../Models/User');
const Chat = require('../../../Models/Chat');
const auth = require('../../../middleware/auth');
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { manager, code, title, genre, introduce } = req.body;

  try {
    if (title === '') {
      return res.status(400).json({
        errors: {
          message: "제목을 입력해주세요",
        },
      });
    }

    if (genre === '') {
      return res.status(400).json({
        errors: {
          message: "장르를 선택해주세요",
        },
      })
    }

    if (introduce.length < 10) {
      return res.status(400).json({
        errors: {
          message: "소개는 10자 이상 입력해주세요",
        },
      })
    }

    const chat = new Chat({
      code,
      manager,
      title,
      genre,
      introduce,
      member: [manager],
    });

    await chat.save();

    await User.update({ _id: manager }, {
      $push: {
        openedChat: {
          code,
          title,
        },
        membership: {
          code,
          manager,
          title,
          genre,
          current: chat.current.length,
          member: chat.member.length,
        },
        operatedChat: {
          code,
          title,
          genre,
          current: chat.current.length,
          member: chat.member.length,
        }
      },
    });

    res.status(200).json({
      code: chat.code,
      createdAt: chat.createdAt,
      current: chat.current.length,
      genre: chat.genre,
      manager: chat.manager,
      member: chat.member.length,
      title: chat.title,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
