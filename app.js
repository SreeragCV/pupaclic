const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/user.js");
const profileRoutes = require("./routes/profile.js");
const enquiryRoutes = require("./routes/enquiry.js");
const app = express();
const port = 3000;
const mongoUrl = "mongodb://127.0.0.1:27017/pupaclic";

app.use(express.json());

mongoose
  .connect(mongoUrl)
  .then(() => console.log("MONGO connection opened"))
  .catch((e) => console.log("Error: ", e));


app.use("/", userRoutes);
app.use("/profile", profileRoutes);
app.use("/", enquiryRoutes);

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
