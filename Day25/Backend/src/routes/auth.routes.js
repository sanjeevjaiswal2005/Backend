const { registerController, loginController } = require("../controllers/auth.controller");
const userModel = require("../models/user.model");

const express = require("express");
const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;
