var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/balto')

exports.mongoose = mongoose
