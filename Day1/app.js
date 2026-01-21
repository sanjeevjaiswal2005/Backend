const express = require("express");
const app = express(); // creating instances

app.get("/", (req, res) => {
  res.send("This is /home page backend code");
});

// app.listen(8000,() => {
//   console.log("server is running on the post 800 pe");
// }); // running the server
app.listen(8000, () => {
  console.log("hey backend ");
});
