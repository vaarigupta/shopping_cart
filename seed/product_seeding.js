const {mongoose} = require('../db/mongoose');
const path = require('path');;
// const productfile = require(path.join('/..', '/models' , '/product'));
const productfile = require('../models/product');
const products = [
  new Product({
  // imagepath:path.join('/..','/public','/images','/mobile1.jpg'),
  imagepath:"https://www.91-img.com/pictures/129255-v3-samsung-galaxy-a8-star-mobile-phone-large-1.jpg",
  title:"Samsung",
  description:"exemplary phone",
  price:240
}),
new Product({
// imagepath:path.join('/..','/public','/images','/mobile1.jpg'),
imagepath:"https://www.91-img.com/pictures/129255-v3-samsung-galaxy-a8-star-mobile-phone-large-1.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
// imagepath:path.join('/..','/public','/images','/mobile1.jpg'),
imagepath:"https://www.91-img.com/pictures/129255-v3-samsung-galaxy-a8-star-mobile-phone-large-1.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
// imagepath:path.join('/..','/public','/images','/mobile1.jpg'),
imagepath:"https://www.91-img.com/pictures/129255-v3-samsung-galaxy-a8-star-mobile-phone-large-1.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
})
];

for(var i =0;i<products.length;i++)
{
  products[i].save().then((prod)=>{
    console.log("Added");
  }).catch((e)=>{
    console.log("error");
  });
}
