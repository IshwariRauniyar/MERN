const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/post");

app.use(
  "/api",
  (req, _res, next) => {
    next();
  },
  routes
);

app.listen(8848, () => {
  console.log("Server started on port 8848");
});
