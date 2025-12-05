var express = require('express');
var menuRouter = express.Router();

/* GET home page. */
menuRouter.get('/menu', function(req, res, next){
    res.render('menu', { title: 'Downtown Donuts'});
});

module.exports = menuRouter;