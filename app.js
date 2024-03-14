const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/user");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/pupaclic")
  .then(() => console.log("MONGO connection opened"))
  .catch((e) => console.log("Error: ", e));

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
