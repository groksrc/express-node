var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var env = express().get('env');
  res.render('index', { title: 'Express', env: env, func: function() { 
    var someVal = 1;
    return someVal;    
  } });
});

module.exports = router;
