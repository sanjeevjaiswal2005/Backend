const express = require("express");
const userController = require("../controller/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */

userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followController,
);

/**
 * @route POST /api/users/unollow/:userid
 * @description unFollow a user
 * @access Private
 */
userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowController,
);

module.exports = userRouter;
