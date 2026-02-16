const express = require("express");
const postController = require("../controller/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postRouter = express.Router();

postRouter.post(
  "/",
  upload.single("image"),
  postController.postCreateController,
);

//api for the getting all post of the user from the database.

/**
 * GET/api/posts
 */
postRouter.get("/", postController.postGetController);

/**
 * Get/api/posts/details/:postId,
 */

postRouter.get("/details/:postId", postController.getPostDetails);

module.exports = postRouter;
