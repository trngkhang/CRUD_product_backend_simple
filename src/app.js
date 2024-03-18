require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/index.route");

const app = express();
const port = process.env.PORT;
const dbConStr = process.env.DB_CON_STR;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
route(app);

//connect db
mongoose
  .connect(dbConStr)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
