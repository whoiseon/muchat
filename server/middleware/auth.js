require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");

  console.log(req.headers);
  // token check
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    // token 해독
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // req에 해독한 user 정보 생성
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzN2FjN2I3OGJjMjhhNjBkMGZkZWI0In0sImlhdCI6MTY2NDc4NzExMiwiZXhwIjoxNjY0NzkwNzEyfQ.ViHQdzqQkRPiYmR51CLVLFMR3FiVvMxbx3NddASamF8