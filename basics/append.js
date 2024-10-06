const fs = require("fs");

fs.appendFile("abcd.txt", " Ky Haal", function (err) {
  if (err) console.log(err);
  else console.log("appended");
});
