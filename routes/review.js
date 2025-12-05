var express = require('express');
var reviewRouter = express.Router();

/* GET home page. */
reviewRouter.get('/review', function(req, res, next){
    res.render('review', { title: 'Downtown Donuts'});
});

module.exports = reviewRouter;