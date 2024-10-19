const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.get("/", function (req, res, next) {
  req.flash("error", "invalid password");
  res.redirect("/error");
});
app.get("/error", function (req, res, next) {
  const message = req.flash("error");
  res.send(message);
});

app.listen(3000);
