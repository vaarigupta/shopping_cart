var express = require('express');
var router = express.Router();

/* GET home page. 
By sending request at '/' , it renders the index.hbs page along with a hook named title 
which says that wherever the title used in the views folder , change it to shopping cart

*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart' });
});

module.exports = router;
