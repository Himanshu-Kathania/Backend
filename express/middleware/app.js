const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log(" running middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("Middleware k baadka");
});

app.get("/home", function (req, res) {
  res.send("this is home");
});

app.listen(3000);
