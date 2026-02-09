const express = require("express");

const app = express();

//Post==>create the student details
app.post("/api/students", (req, res) => {
    
  res.send("student created sucessfully...");
});

module.exports = app;
