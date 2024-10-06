const fs = require("fs");

fs.mkdir("MkFolder", (err) => {
  if (err) throw err;
  console.log("file Created");
});
