require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();
let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
