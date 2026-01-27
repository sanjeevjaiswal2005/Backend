const app = require("./src/app");

const mongoose = require('mongoose')

function connectToDb() {
    mongoose
      .connect(
        "mongodb+srv://sanjeevjaiswal:GX6ugRC1dEMrH1of@cluster0.ttgzz02.mongodb.net/day6",
      )
      .then(() => {
        console.log("Database connected sucessfully....");
      });
}

connectToDb();

app.listen(3000, () => {
  console.log("server is runnig on port 3000");
});
