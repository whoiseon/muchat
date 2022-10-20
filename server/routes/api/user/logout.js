const express = require('express');
const User = require('../../../Models/User');
const auth = require('../../../middleware/auth');
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const membershipChat = await User.findById(req.user);

    await User.update({_id: req.user}, {
      openedChat: membershipChat.membership,
    });

    await res.clearCookie('AccessToken', { path: "/", });

    res.status(200).json({
      logoutSuccess: true,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
