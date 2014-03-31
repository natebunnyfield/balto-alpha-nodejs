/* mongoose model for deal collection */

var mongoose = require('../models/db').mongoose

require('../models/line_item')


var DealSchema = mongoose.Schema({
  name: String,
  start: Date,
  stop: Date,
  skus: {type: [mongoose.Types.LineItem]},
  customer_choice: Boolean
})


module.exports = mongoose.model('Deal', DealSchema)
