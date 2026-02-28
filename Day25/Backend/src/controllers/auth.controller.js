const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isAlreadyExist) {
    return res.status(409).json({
      message: "user is already exiat",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully...",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" },
  );
  res.cookie("token", token);

  res.status(200).json({
    message: "user login successfully...",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
module.exports = {
  registerController,
  loginController,
};
