/* crud routes */

var Sku = require('../models/sku')


// get
exports.get = function (req, res) {
  var id = req.params.id
  if (id === undefined) {
    // list
    return Sku.find(function (err, skus) {
      if (!err) {
        res.send(skus)
      } else {
        return console.log(err)
      }
    })
  } else {
    // get sku
    return Sku.findById(id, function (err, sku) {
      if (!err) {
        return res.send(sku)
      } else {
        return console.log(err)
      }
    })
  }
}


// post
exports.post = function (req, res) {
  var sku = new Sku({
    name: req.body.name,
    brand: req.body.brand,
    weight: req.body.weight,
    tags: req.body.tags
  })
  sku.save(function (err){
    if (err) {
      return console.log(err)
    }
  })
  return res.send(sku)
}


// put
exports.put = function(req, res) {
  var id = req.params.id
  return Sku.findById(id, function (err, sku) {
    if (!err) {
      sku.name = req.body.name
      sku.brand = req.body.brand
      sku.weight = req.body.weight
      sku.tags = req.body.tags
      return sku.save(function (err) {
        if (!err) {
          return res.send(sku)
        } else {
          return console.log(err)
        }
      })
    } else {
      return console.log(err)
    }
  })
}


// delete
exports.delete = function(req, res) {
  var id = req.params.id
  return Sku.findById(id, function (err, sku) {
    if (!err) {
      return sku.remove(function (err) {
        if (!err) {
          return res.send('')
        } else {
          return console.log(err)
        }
      })
    } else {
      return console.log(err)
    }
  })
}
