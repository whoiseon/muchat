const express = require('express');
const auth = require('../../../middleware/auth');
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
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
