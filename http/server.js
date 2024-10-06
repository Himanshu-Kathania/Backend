const http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("hey");
  } else {
    res.end("page not found");
  }
});

server.listen(3000);
