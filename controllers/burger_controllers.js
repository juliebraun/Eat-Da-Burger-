var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
	burgers.all(function(burger_data) {
		console.log(burger_data);
		res.render('index', {burger_data});
	})
})

module.exports = router;