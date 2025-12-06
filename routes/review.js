var express = require('express');
var reviewRouter = express.Router();

/* GET review page. */
reviewRouter.get('/review', function(req, res, next){
  //  res.render('review', { title: 'Downtown Donuts', reviews: results});
    try {
    req.db.query('SELECT * FROM reviews;', (err, results) => {
      if (err) {
        console.error('Error fetching reviews:', err);
        return res.status(500).send('Error fetching reviews');
      }
      res.render('review', { title: 'Downtown Donuts', reviews: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

/*Post new comment */
reviewRouter.post('/create', function (req, res, next) {
    const { comment } = req.body; 
    try {
      req.db.query('INSERT INTO reviews (comment) VALUES (?);', [comment], (err, results) => {
        if (err) {
          console.error('Error adding review:', err);
          return res.status(500).send('Error adding review');
        }
        console.log('Review added successfully:', results);
      });
      res.redirect('/review')
    } catch (error) {
      console.error('Error adding review:', error);
      res.status(500).send('Error adding review');
    }
});

module.exports = reviewRouter;