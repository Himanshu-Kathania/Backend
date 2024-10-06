const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/about", function (req, res) {
  res.send("this is about page");
});
app.get("*", function (req, res) {
  res.send("this is Star page");
});

app.listen(3000);
