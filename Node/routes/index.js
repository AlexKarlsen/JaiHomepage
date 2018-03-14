var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
