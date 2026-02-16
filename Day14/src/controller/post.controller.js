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
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "user Unauthorized.",
    });
  }
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "Instagram_14",
  });

  // res.send(file);

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "User is UnAuthorized..",
    });
  }

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(200).json({
    message: "post created sucessfully....",
    post,
  });
}

async function postGetController(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user plese login or register",
    });
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized user",
    });
  }
  const userId = decoded.id;
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
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized user",
    });
  }

  let userId = decoded.id;
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
