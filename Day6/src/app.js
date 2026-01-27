const express = require("express");

const app = express();

const notes = [];

app.use(express.json());

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(notes);
  res.send("Notes created sucessfully.....");
});

module.exports = app;
