const express = require('express');
const User = require('../../../../Models/User');
const router = express.Router();
const auth = require('../../../../middleware/auth');
const bcrypt = require("bcrypt");
const {hash} = require("bcrypt");

router.post('/', auth, async (req, res) => {
  const { nowPassword, newPassword, newPasswordCheck } = req.body;

  try {
    const user = await User.findById(req.user);
    const passwordCheck = bcrypt.compareSync(nowPassword, user.password);

    if (nowPassword === '') {
      return res.status(400).json({
        errors: {
          message: "현재 비밀번호를 입력해주세요",
        },
      });
    }

    if (newPassword === '') {
      return res.status(400).json({
        errors: {
          message: "새로운 비밀번호를 입력해주세요",
        },
      });
    }

    if (newPasswordCheck === '') {
      return res.status(400).json({
        errors: {
          message: "새로운 비밀번호 확인을 입력해주세요",
        },
      });
    }

    if (!passwordCheck) {
      return res.status(400).json({
        errors: {
          message: "올바르지 않는 비밀번호 입니다",
        },
      });
    }

    if (newPassword !== newPasswordCheck) {
      return res.status(400).json({
        errors: {
          message: "새로운 비밀번호가 맞지 않습니다",
        },
      });
    }

    if (nowPassword === newPassword) {
      return res.status(400).json({
        errors: {
          message: "현재 사용중인 비밀번호로 변경할 수 없습니다",
        },
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        errors: {
          message: "비밀번호는 8자 이상 입력해주세요",
        },
      });
    }

    // password 암호화
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    await User.update({ _id: req.user }, {
      $set: {
        password: hashPassword,
      }
    })

    res.status(200).json({
      passwordChange: "success",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
