const express = require('express');
const Chat = require('../../../Models/Chat');
const router = express.Router();

router.get('/', async (req, res) => {
  const { keyword } = req.query;

  try {
    let searchedChat = [];

    if (keyword) {
      searchedChat = await Chat.find({
        title: {
          $regex: new RegExp(keyword, "i"),
        },
      }).populate({
        path: "manager",
        select: {
          nickname: 1,
          mucorn: 1,
        }
      });
    }

    return res.status(200).json(searchedChat)
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
