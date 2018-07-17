/*// import the http module
var http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res){
	res.end('Hello World!');
}

// create server
var server = http.createServer(handleRequests);

server.listen(8080, function() {
	console.log('Listening on port 8080');
});*/

//using express
var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function() {
	console.log('app started');
});

app.get('/', function(req, res){
	res.send('Hello world');
});