const mongoose = require("mongoose");

// creating the schema..
const productSchema = new mongoose.Schema({
  bgImg: String,
  name: String,
  description: String,
  price: Number,
});

// model crating ...
const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
