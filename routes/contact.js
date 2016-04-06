var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {   //why dont need include /about?
  res.render('contact', { title: 'Contact' });  //rendered from contact.jade
});

module.exports = router;
