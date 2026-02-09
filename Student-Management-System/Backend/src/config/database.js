const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanjeevjaiswal:GX6ugRC1dEMrH1of@cluster0.ttgzz02.mongodb.net/StudentDetails",
    );

    console.log("Connected to DB successfully...");
  } catch (error) {
    console.error("DB connection failed ❌", error.message);
    process.exit(1); // app ko band kar dega agar DB connect na ho
  }
};

module.exports = connectToDb;
