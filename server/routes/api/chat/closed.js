const express = require('express');
const User = require('../../../Models/User');
const auth = require("../../../middleware/auth");
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { code } = req.body;

  try {
    await User.update({_id: req.user}, {
      $pull: {
        openedChat: {
          code,
        }
      }
    })

    return res.status(200).json({
      code,
    })
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
