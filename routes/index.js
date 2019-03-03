var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    if(err)
    {
      res.render('error');
    }
    var productChunks = [];
    for(var i=0;i< docs.length ;i += 3)
    {
      productChunks.push(docs.slice(i,i+3));
    }
    res.render('./shop/index', { title: 'Shopping Cart', products: productChunks });
  });


  // .then((Prod)=>{
  //
  //   console.log("Found");
  // },(e)=>{
  //   console.log("Not Found");
  // });


});

module.exports = router;


/* GET home page.
By sending request at '/' , it renders the index.hbs page along with a hook named title
which says that wherever the title used in the views folder , change it to shopping cart

*/
