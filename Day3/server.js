const express = require("express");
const app = express();
app.use(express.json()); //this is middleware use to read the req.body data

const notes = [];

app.post("/notes", (req, res) => {
  // console.log(req.body);
  notes.push(req.body);
  res.send("notes creatd");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});
app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
