var express = require('express'),
    router = express.Router()

router.get('/discussion', function (req, res, next) {
    res.render('discussion')
})

router.get('/documents', function (req, res, next) {
    res.render('documents')
})

router.get('/', function(req, res, next) {
  res.render('index')
})

module.exports = router