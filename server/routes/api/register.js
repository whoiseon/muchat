const express = require('express');
const User = require('../../Models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
  const { nickname, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    let nicknameCheck = await User.findOne({ nickname });

    if (user) {
      return res.status(400).json({
        errors: {
          message: "이미 가입된 이메일입니다.",
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

    user = new User({
      nickname,
      email,
      password,
    });

    // password 암호화
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // db에 user 저장
    await user.save();

    res.send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
