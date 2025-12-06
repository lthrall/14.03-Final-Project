var express = require('express');
var menuRouter = express.Router();

/* GET menu page. */
menuRouter.get('/menu', function(req, res, next){
    res.render('menu', { title: 'Downtown Donuts'});
});

module.exports = menuRouter;