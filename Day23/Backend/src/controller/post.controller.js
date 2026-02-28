const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function postCreateController(req, res) {
  //   const { caption, imgUrl } = req.body;
  // console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "Instagram-Project",
  });

  // res.send(file);

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(200).json({
    message: "post created sucessfully....",
    post,
  });
}

async function postGetController(req, res) {
  const userId = req.user.id;
  const posts = await postModel.find({
    user: userId,
  });
  res.status(200).json({
    message: "user data fatched sucessfully...",
    posts,
  });
  // res.send("user data fetched sucessfully...");
}

async function getPostDetails(req, res) {
  let userId = req.user.id;
  let postId = req.params.postId;

  let post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Post is not found..",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden user",
    });
  }

  res.status(200).json({
    message: "post details geted sucessfully...",
    post,
  });
}

module.exports = { postCreateController, postGetController, getPostDetails };
