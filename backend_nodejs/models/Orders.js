const mongoose = require('mongoose');

//Orders Schema definition
const OrderSchema = mongoose.Schema({  }, {strict: false});
 
module.exports = mongoose.model('Orders', OrderSchema); 