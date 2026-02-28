const mongoose = require("mongoose");

//creating schema.

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user is already exist.."],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "this email is already exist"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/vfgsb0ehk/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
