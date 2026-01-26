const express = require("express");

const app = express();
app.use(express.json());
const notes = [];

/*Get/notes */
app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});
/* POST/notes */
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Notes created sucessfully...",
  });
});

/*PATCH/notes/:index */

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;
  res.status(200).json({
    message: "Notes update sucessfully.....",
  });
});
/*Delete/notes/:index */

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(204).json({
    message: "Notes deleted sucessfully....",
  });
});
module.exports = app;
