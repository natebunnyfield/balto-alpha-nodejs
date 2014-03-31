/* mongoose model for sku collection */

var mongoose = require('../models/db').mongoose


var SkuSchema = mongoose.Schema({
  name: String,
  brand: String,
  weight: Number,
  tags: {type: mongoose.Schema.Types.Mixed, default: {}}
})


mongoose.Types.Sku = SkuSchema

module.exports = mongoose.model('Sku', SkuSchema)
