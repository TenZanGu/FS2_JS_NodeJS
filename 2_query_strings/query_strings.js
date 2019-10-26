
try { var http = require('http');
    var url = require('url');   
    // Create the server to work with the query string
    http.createServer(function (req, res) {
     // Send an OK header since everything is fine here
     res.writeHead(200, {'Content-Type': 'text/html'});
     // Split the URL into parts
     var q = url.parse(req.url, true).query;
     var today=new Date();
    //  const options = {weekday : "long", month:"short", day:"numeric"}

     if ( q.txt == undefined) {
         q.txt = "No Query String"
     }
     var txt = q.txt + ' ' + today.toUTCString();  
     res.end(txt)
     // Now we have an object we can work with
     // We can execute code here for that purpose
     
    }).listen(80);
}
catch(error) {
    console.log(error);
    
}
