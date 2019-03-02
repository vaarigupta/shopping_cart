const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/shopping';
mongoose.connect(URL , {useNewUrlParser : true });
module.exports = mongoose;
