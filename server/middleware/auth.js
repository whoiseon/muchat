require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log(authHeader);
  // token check
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    // token 해독
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

    req.user = decoded.user.id;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
