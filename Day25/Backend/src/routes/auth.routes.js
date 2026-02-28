const {
  registerController,
  loginController,
  getUserController,
  logoutController,
} = require("../controllers/auth.controller");
const authUser = require("../middlewares/auth.middleware");

// const authMiddleware = require("../middlewares/auth.middleware");
const express = require("express");

const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

authRouter.get("/get-me", authUser, getUserController);

authRouter.post("/logout", logoutController);

module.exports = authRouter;
