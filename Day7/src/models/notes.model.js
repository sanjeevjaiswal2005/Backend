const mongoose = require('mongoose');


//creating schema 
const noteSchema = new mongoose.Schema({
    title: String,
    description:String,
})

//creating models

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel;