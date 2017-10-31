var mongoose = require('mongoose');
console.log('item model');
var ItemSchema = new mongoose.Schema({
  item: String,
  // last_name: String,
  // birthday: Number
})
var Item = mongoose.model('Item', ItemSchema);
