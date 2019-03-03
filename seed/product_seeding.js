const mongoose = require('../db/mongoose');
const path = require('path');;
const Product = require('../models/product');
const products = [
  new Product({
  imagepath:path.join('/..','/public','/images','/mobile1.jpg'),
  title:"Samsung",
  description:"exemplary phone",
  price:240
}),
new Product({
imagepath:path.join('/..','/public','/images','/mobile2.png'),
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:path.join('/..','/public','/images','/mobile3.jpg'),
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
 imagepath:path.join('/..','/public','/images','/mobil4.jpg'),
title:"Samsung",
description:"exemplary phone",
price:240
})
];

var done =0;
for(var i =0;i< products.length;i++)
{

  products[i].save().then((doc)=>{
    done++;
    console.log("Saved product - ", done);
  },(e)=>{
    console.log("Not saved");
  })

  if(done=== products.length)
  {
    mongoose.disconnect();
  }
}
