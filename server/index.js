const express = require("express");
const app = express();
const port = 3065;

app.get("/", (req, res) => {
  res.send("Hello, Muchat");
});

app.listen(port, () => {
  console.log(`Listening on Port is ${port}`);
});
