const express = require("express");

const authController = require("../controller/auth.controller");
const identifyUser = require("../middlewares/auth.middleware");
const authRouter = express.Router();

//register api
authRouter.post("/register", authController.registerController);

//login api

authRouter.post("/login", authController.loginController);

/**
 * @routes Get/api/auth/get-me
 * @description use to find out logdin user details
 */

authRouter.get("/get-me", identifyUser, authController.getMeController);
module.exports = authRouter;
