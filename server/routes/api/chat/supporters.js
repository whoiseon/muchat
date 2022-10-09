const express = require('express');
const Chat = require('../../../Models/Chat');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const supporters = await Chat.find({ supporters: true }, {
      introduce: 0,
    }).populate('manager');

    return res.status(200).json(supporters);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
