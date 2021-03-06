const mongoose = require('../db/mongoose');
const path = require('path');;
const Product = require('../models/product');
const products = [
  new Product({
  imagepath:"https://images.samsung.com/is/image/samsung/my-galaxy-a9-a920-sm-a920fzbdxme-frontvitalityblue-122249835?$PD_GALLERY_L_JPG$",
  title:"Samsung",
  description:"exemplary phone",
  price:240
}),
new Product({
imagepath:"https://www.91-img.com/pictures/129255-v3-samsung-galaxy-a8-star-mobile-phone-large-1.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://ss7.vzw.com/is/image/VerizonWireless/SAMSUNG_Galaxy_S9_Blue?$device-lg$",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
 imagepath:"data:image/jpeg;base64,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",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://images-na.ssl-images-amazon.com/images/I/61MraES1fsL._SY550_.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/samsung-galaxy-j7-star/Samsung-Galaxy-J7-Star-Blue-1-3x.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://www.91-img.com/pictures/126466-v10-samsung-galaxy-a6-mobile-phone-large-1.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://static.toiimg.com/photo/60269370/Samsung-Galaxy-J7-Plus.jpg",
title:"Samsung",
description:"exemplary phone",
price:240
}),
new Product({
imagepath:"https://images-na.ssl-images-amazon.com/images/I/81C3NI23ywL._SL1500_.jpg",
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
