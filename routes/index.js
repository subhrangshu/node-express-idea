var express = require('express');
var router = express.Router();
var nested = require('./nestedRouter/nestedRouter');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/nested', nested);

module.exports = router;
