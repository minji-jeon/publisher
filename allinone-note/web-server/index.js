var http = require('http');
var hostname = '10.150.100.47';
var port = 8080;

var server = http.createServer(function(req,res) {
  var path = req.url;
  var method = req.method;

  if(path === "/products") {
    if(method === "GET") {
      res.writeHead(200, {"Content-Type": "application/json"});
      var products =JSON.stringify([{
        name : "카라멜마끼아또",
        price : 5000,
      }])
      console.log(products);
      res.end(products);
    } else if (method === "POST") {
      res.end("finish");
    }
  }

  res.end("coffffee");
});

server.listen(port, hostname);
console.log('server on');