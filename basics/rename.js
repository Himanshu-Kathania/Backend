const fs = require("fs");

fs.rename("abcde.txt", "abcd.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("hogya");
  }
});
