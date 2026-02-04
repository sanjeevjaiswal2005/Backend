const express = require("express");
const productModel = require("./models/product.model");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("./public"));
//Get==> finds all products stored in db
app.get("/api/products", async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({
    message: "Products details gets sucessfully...",
    products,
  });
});

//Post==> create a products
app.post("/api/products", async (req, res) => {
  console.log(req.body);
  const { bgImg, name, description, price } = req.body;

  const product = await productModel.create({
    bgImg,
    name,
    description,
    price,
  });

  res.status(201).json({
    message: "Products created sucessfully..",
    product,
  });
});

//Update==>update the products sucessfully...
app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { bgImg, name, description, price } = req.body;
  await productModel.findByIdAndUpdate(id, { bgImg, name, price, description });
  res.status(200).json({
    message: "Products updsted successfully...",
  });
});

//Delete==>delete products
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  await productModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Products deleted sucessfully...",
  });
});

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "./public/index.html"));
});
module.exports = app;
