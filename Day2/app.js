const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is /home page data");
});

app.get("/about", (req, res) => {
  res.send("this is about page data");
});
app.get("/contact", (req, res) => {
  res.send("this is contact page data");
});
app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
