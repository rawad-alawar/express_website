var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {   //why dont need include /about?
  res.render('about', { title: 'About' });  //rendered from about.jade
});

module.exports = router;
