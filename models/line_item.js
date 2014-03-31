/* mongoose models for sku and deal line item collections */

var mongoose = require('mongoose')

require('mongoose-currency').loadType(mongoose);


// line item of sku -> used in deals
var SkuLineItemSchema = mongoose.Schema({
  quantity: Number,
  price: mongoose.Types.Currency,
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Sku'}
})


// line item of deal -> used in orders
var DealLineItemSchema = mongoose.Schema({
  quantity: Number,
  price: mongoose.Types.Currency,
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'Deal'}
})


mongoose.Types.SkuLineItemSchema = SkuLineItemSchema
mongoose.Types.DealLineItem = DealLineItemSchema

module.exports = {
  SkuLineItem: mongoose.model('SkuLineItem', SkuLineItemSchema),
  DealLineItem: mongoose.model('DealLineItem', DealLineItemSchema)
}
