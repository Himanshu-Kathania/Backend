const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  console.log(req.url);
});

app.listen(3000);
