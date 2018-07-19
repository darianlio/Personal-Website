//require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

router.get('/', function(req, res){
	res.render('pages/index');
});

router.get('/portfolio', function(req, res){
	res.render('pages/portfolio');
});

router.get('/resume', function(req, res){
	res.render('pages/resume');
});

router.get('/contact', function(req, res){
});
// POST route from contact form
router.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});