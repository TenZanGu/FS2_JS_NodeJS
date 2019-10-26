
try {const http = require("http");
const hostname = 'localhost';

const port = 999;
const server = http.createServer((req, res) => {
 
 res.statusCode = 200;
 res.setHeader('Title-Type', 'text/plain');
 res.end('Hello World\n');
});

server.listen(port, hostname, () => {
 console.log(`http://${hostname}:${port}/` + "ok");
})
}
catch(error) {
    console.log(error);
    
}
