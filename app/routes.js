//require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

router.get('/', function(req, res){
	res.render('pages/wipindex');
});

router.get('/portfolio', function(req, res){
	res.render('pages/portfolio');
});

router.get('/resume', function(req, res){
	res.render('pages/resume');
});