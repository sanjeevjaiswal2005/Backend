const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../config/cache");
async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Token is not found",
    });
  }
  const userIsblacklist = await redis.get(token);

  if (userIsblacklist) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
}

module.exports = authUser;
