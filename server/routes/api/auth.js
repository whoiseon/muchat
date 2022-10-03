const express = require('express');
const User = require('../../Models/User');
const router = express.Router();
const auth = require('../../middleware/auth');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
