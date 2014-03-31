/* mocha tests for quantity model */

var Quantitiy = require('../models/quantity')


describe('quantity', function(){
  var quantity = new Quantitiy()

  it('has a sku', function(){
    quantity.should.have.property('sku')
  })

  it('has a number on shelf', function(){
    quantity.should.have.property('on_shelf')
  })

  it('has a number in carts', function(){
    quantity.should.have.property('in_carts')
  })

  it('has a number to be picked', function(){
    quantity.should.have.property('to_be_picked')
  })

  it('has a number available for sale', function(){
    quantity.should.have.property('available_for_sale')
  })

  describe('maths all proper like', function() {
    quantity.set('on_shelf', 10).set('in_carts', 3).set('to_be_picked', 1)
    quantity.get('available_for_sale').should.equal(6)
  })
})
