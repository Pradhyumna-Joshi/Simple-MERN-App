const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.json());
const userRouter = require("./Routes/userRoutes");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Succesfully");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Running on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(userRouter);
