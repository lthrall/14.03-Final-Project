var express = require('express');
var aboutRouter = express.Router();

/* GET about page. */
aboutRouter.get('/about', function(req, res, next){
    res.render('about', { title: 'Downtown Donuts'});
});

module.exports = aboutRouter;