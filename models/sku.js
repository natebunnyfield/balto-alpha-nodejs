var mongoose = require('mongoose')


var SkuSchema = mongoose.Schema({
  name: String,
  brand: String,
  weight: Number,
  tags: {type: mongoose.Schema.Types.Mixed, default: {}}
})


mongoose.Types.Sku = SkuSchema

module.exports = mongoose.model('Sku', SkuSchema)
