var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.group);
  //res.render('index', { title: 'Express111',content:'first Proj' });
  res.json({'a':123});
});

module.exports = router;
