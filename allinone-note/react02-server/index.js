var http = require('http');
var hostname = '127.0.0.1'
var port = 8080;

const server = http.createServer(function(req, res) {
  console.log("req", req)
  res.end("client")
});

server.listen(port, hostname); //listen는 기다리고있다는 의미. port, hostname를 기다리고있겠다

console.log("on!")