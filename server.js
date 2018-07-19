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
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
//use ejs and express layouts
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(expressLayouts);
//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files (css js and images) locations
app.use(express.static(__dirname + '/public'));

var server = app.listen(80, function(){
	var host = server.address().address
	var port = server.address().port
   	console.log("Example app listening at http://%s:%s", host, port)
});
