const express = require("express");
const postController = require("../controller/post.controller");
const identifyUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postRouter = express.Router();

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.postCreateController,
);

//api for the getting all post of the user from the database.

/**
 * GET/api/posts
 */
postRouter.get("/", identifyUser, postController.postGetController);

/**
 * Get/api/posts/details/:postId,
 */

postRouter.get("/details/:postId", identifyUser, postController.getPostDetails);

module.exports = postRouter;
