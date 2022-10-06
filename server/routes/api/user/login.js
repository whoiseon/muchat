const express = require('express');
const User = require('../../../Models/User');
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
            message: "올바르지 않는 비밀번호 입니다.",
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
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "2h" },
        (err, token) => {
          if (err) throw err;
          res.cookie('AccessToken', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 119,
          })
          res.status(200).json({
            token,
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