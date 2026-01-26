const express = require("express");

const app = express();
app.use(express.json());
const notes = [];

/*
FOR POST mathod 
*/
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("Notes created sucessfully...");
});

/*
For GET methods ==> retrived data from the server
*/
app.get("/notes", (req, res) => {
  res.send(notes);
});

/*
PATCH==> Update a specifice resources
*/

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;

  res.send(notes);
});

/* DELETE resource.... */
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("Notes is deleted sucessfully......");
});


module.exports = app;
