const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes gets sucessfully..",
    notes,
  });
});
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Note is created sucessfully..",
    note,
  });
});

module.exports = app;
