const mongoose = require("mongoose");

//creatng the schema
const studentSchem = new mongoose.Schema({
  profilePic: String,
  name: String,
  branch: String,
  roolNo: String,
  dateOfBirth: Number,
  collage: String,
  gender: String,
});

//creating the models..
const studentModel = mongoose.model("student", studentSchem);

module.exports = studentModel;
