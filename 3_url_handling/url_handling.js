try {
  // Setting up modules
var http = require('http');// HTTP
var url = require('url'); // URL handling
var fs = require('fs'); // File serving

http.createServer(function (req, res) {
 var queryData = url.parse(req.url, true); 
 var filename = '.' + queryData.pathname;
 if (queryData.pathname == "/"){
  
   filename = "./index.html"
 }
 console.log(filename);
 
 fs.readFile(filename, function(err, data) {
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found go to this URL: http://localhost/index.html");
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
}).listen(80);
} catch (error) {
  
}
