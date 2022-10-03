const express = require('express');
const User = require('../../Models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (email === '') {
      return res.status(400).json({
        errors: {
          message: "이메일을 입력해주세요",
        },
      });
    }

    if (password === '') {
      return res.status(400).json({
        errors: {
          message: "비밀번호를 입력해주세요",
        },
      })
    }

    if (!user) {
      return res.status(400).json({
        errors: {
          message: "가입되지 않은 이메일입니다",
        },
      });
    } else {
      const passwordCheck = bcrypt.compareSync(password, user.password);

      if (!passwordCheck) {
        return res.status(400).json({
          errors: {
            message: "비밀번호가 맞지 않습니다",
          },
        });
      }

      // JWT 생성 및 response
      const payload = {
        user: {
          id: user.id,
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.cookie('AccessToken', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
          })
          res.status(200).send({
            code: 200,
            message: '토큰이 발급되었습니다.',
            token: token,
          });
        }
      );
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
