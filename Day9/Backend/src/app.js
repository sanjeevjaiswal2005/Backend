const express = require("express");
const noteModel = require("./models/notes.model");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
//GET==>/api/notes
app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "notes geted sucessfully...",
    notes,
  });
});

//POST=>/api/notes
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  //note await and async bhulna nhi hai..jab data postman pe show n aho to...
  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Notes is created successfully...",
    note,
  });
});

//UPDATE==>/api/notes/:id
app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "Notes is updated sucessfully...",
  });
});

//DELETE=>/api/notes/:id
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Notes is deleted successfuly.....",
  });
});
module.exports = app;
