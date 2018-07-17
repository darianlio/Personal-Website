//require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../wipindex.html'));
});

router.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, '../wipabout.html'));
});

router.get('/contact');
router.post('/contact');