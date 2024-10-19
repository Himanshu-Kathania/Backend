const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", cors(), function (req, res, next) {
  res.send("hy");
});

app.listen(3000);
