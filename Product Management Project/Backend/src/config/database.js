const mongoose = require("mongoose");

//function for the data base.

async function connectToDb() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db successfully...");
  });
}

module.exports = connectToDb;
