//require express
var express = require('express');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

router.get('/', function(req, res){
	res.send('Hello world');
});

router.get('/about', function(req, res){
	res.send('Hello world, I am the about page');
});

router.get('/contact', function(req, res){
	res.send('Hello world, I am the contact page');
});

router.post('/contact');