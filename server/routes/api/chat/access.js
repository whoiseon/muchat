const express = require('express');
const User = require('../../../Models/User');
const auth = require("../../../middleware/auth");
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { code, title } = req.body;

  try {
    await User.update({ _id: req.user }, {
      $push: {
        openedChat: {
          code,
          title,
        },
      },
    });

    return res.status(200).json({
      code, title
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
