var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });  //rendered from contact.jade
});

//uses nodemailer to send the message in the form to a specified email address
router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({    //tells server what email to send the message to
    service: 'Gmail',
    auth:{
      user: "ralawar54@gmail.com",
      pass: 'password'
    }
  });

  var mailOptions = {     //object variable to be passed into nodemailer functions
    from: 'Users Name <emailaddress@outlook.com>',
    to: "ralawar54@gmail.com",
    subject: "Website Submission",
    text: 'You have a new submission with the following details...Name: ' +req.body.name+' Email: '+req.body.email+ ' Message: '+req.body.message,
    html: '<p>You have a new submission with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error){
      console.log(error)
      res.redirect('/')
    } else{
      console.log("Message Sent!" + info.response)
      res.redirect('/')
    }
  });
});

module.exports = router;
