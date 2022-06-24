const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const strRoutes = require("./routes/str");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });



  app.use("/api/str", strRoutes);




app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });