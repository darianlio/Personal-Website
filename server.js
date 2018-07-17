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
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

//route our app
var router = require('./app/routes');
app.use('/', router);

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//set static files (css js and images) locations
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('app started');
});