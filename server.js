// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res){
	res.end('Hello World!');
}

// create server
var server = http.createServer(handleRequests);

server.listen(8080, function() {
	console.log('Listening on port 8080');
});