var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var app = express(),
      env = app.get('env');
  
  res.render('index', { title: 'Express', env: env, myVal: req.config.myVal, func: function() { 
    var someVal = 1;
    return someVal;    
  } });
});

module.exports = router;
