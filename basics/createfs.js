const fs = require("fs");

fs.writeFile("abcd.txt", "ye rhi new file", (err) => {
  if (err) throw err;
  console.log("file created");
});
