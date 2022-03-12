var express = require('express');
var router = express.Router();
var nestedNested = require('../nestedRouter/nestedNested/nestedNested')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond');
});
router.use('/nested', nestedNested);
module.exports = router;
