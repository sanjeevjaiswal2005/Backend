const mongoose = require("mongoose");

// creating the schema

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "whith this email user account already create .."],
  },
  password: String,
});

// creating the models for the collection

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
