const express = require("express");
const userModel = require("../models/user.model");

const jwt = require("jsonwebtoken");
const authRouter = express.Router();

//creating the routs..

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const alreadyEmailExist = await userModel.findOne({ email });
  if (alreadyEmailExist) {
    res.status(409).json({
      message: "The email is already exist",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  // for the creating the tokens.
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );
//save token into the cookies.
  res.cookie("jwt_token", token);
  
  res.status(201).json({
    message: "User created sucessfully...",
    user,
    token,
  });
});

module.exports = authRouter;
