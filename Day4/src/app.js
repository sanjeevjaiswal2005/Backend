const express = require("express");

const app = express();
app.use(express.json());
const notes = [];
/*
 for the POST method
*/
app.post("/notes", (req, res) => {
  notes.push(req.body);
  //   console.log(notes);
  res.send("notes created..");
});
/*
For the GET method
*/
app.get("/notes", (req, res) => {
  res.send(notes);
});

/* 
 FOR Update Specific part of resources..
 */
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;

  res.send("Resource updated sucessfully...");
});

/*
For the DELETE Methods
*/

app.delete("/notes/:index", (req, res) => {
  console.log(req.params.index);
  delete notes[req.params.index];
  res.send("Note is deleted sucessfully..");
});

module.exports = app;
