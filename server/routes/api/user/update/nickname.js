const express = require('express');
const User = require('../../../../Models/User');
const router = express.Router();
const auth = require('../../../../middleware/auth');
const bcrypt = require("bcrypt");

router.post('/', auth, async (req, res) => {
  const { nickname, password } = req.body;

  try {
    const user = await User.findById(req.user);
    const nicknameCheck = await User.findOne({ nickname });
    const passwordCheck = bcrypt.compareSync(password, user.password);

    if (nickname === '') {
      return res.status(400).json({
        errors: {
          message: "변경할 닉네임을 입력해주세요",
        },
      });
    }

    if (password === '') {
      return res.status(400).json({
        errors: {
          message: "비밀번호를 입력해주세요",
        },
      });
    }

    if (nicknameCheck) {
      return res.status(400).json({
        errors: {
          message: "이미 사용중인 닉네임입니다.",
        },
      });
    }

    if (nickname === user.nickname) {
      return res.status(400).json({
        errors: {
          message: "현재 사용하고 계신 닉네임입니다.",
        },
      });
    }

    if (!passwordCheck) {
      return res.status(400).json({
        errors: {
          message: "올바르지 않는 비밀번호 입니다.",
        },
      });
    }

    await User.update({ _id: req.user }, {
      $set: {
        nickname,
      }
    })

    res.status(200).json({
      nicknameChange: "success",
      nickname,
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
