
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{ 
  res.render('content/about', { 
    page: 'about',
    title: 'Survey' 
  });
});

module.exports = router;
