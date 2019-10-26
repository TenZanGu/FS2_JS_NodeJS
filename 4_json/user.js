var http = require('http');
var url = require('url');
const fs = require('fs')
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var {
    user
  } = url.parse(req.url, true).query;
  var now = new Date()
  var info
  fs.readFile('./user.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err)
      return
    }
    var data = JSON.parse(jsonString);
    if(user == undefined){
      info = " User in our system : "
      for (var k in data) {
        info += data[k].user +" "
      }
    } else {
      info ="No user is available"
      for (var k in data){
        if(user == data[k].user){
          info= JSON.stringify(data[k].infor)
        }
      }
    }
    res.end(info)
  })
}).listen(88);