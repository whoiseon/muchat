require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // token check
  if (!token) {
    return res.status(401).json({
        errors: {
          message: "로그인 후 이용 가능합니다.",
        },
      }
    );
  }

  // Verify token
  try {
    // token 해독
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

    req.user = decoded.user.id;
    next();
  } catch (error) {
    res.status(401).json({
      errors: {
        message: "로그인 후 이용 가능합니다.",
      },
    });
  }
};
