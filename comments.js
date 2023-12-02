// Create web server
// 1. load http module
var http = require('http');
// 2. create web server object
var server = http.createServer(function(req,res){
    // 3. write head
    res.writeHead(200,{'Content-Type':'text/html'});
    // 4. write body
    res.write('<h1>Comments</h1>');
    // 5. end
    res.end();
});
// 3. listen on port
server.listen(3000);
console.log('Server running on port 3000');