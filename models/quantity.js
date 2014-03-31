/* mongoose model for quantity collection */

var mongoose = require('../models/db').mongoose


var QuantitySchema = mongoose.Schema({
  sku: {type: mongoose.Schema.Types.ObjectId, ref: 'Sku'},
  on_shelf: Number,
  in_carts: Number,
  to_be_picked: Number
})

QuantitySchema.virtual('available_for_sale').get(function(){
  return this.on_shelf - this.in_carts - this.to_be_picked
})


module.exports = mongoose.model('Inventory', QuantitySchema)
