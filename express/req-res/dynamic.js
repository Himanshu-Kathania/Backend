const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  res.send("home page");
});

app.get("/profile/:username", function (req, res) {
  res.send(req.params.username + "s page");
});
app.get("/author/:username/:age", function (req, res) {
  const username = req.params.username;
  const age = req.params.age;

  res.send(`this is ${username}'s page and he is ${age} years old`);
});

app.listen(3000);
