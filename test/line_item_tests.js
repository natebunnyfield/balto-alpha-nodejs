/* mocha tests for line item models */

var SkuLineItem = require('../models/line_item').SkuLineItem
  , DealLineItem = require('../models/line_item').DealLineItem


describe('SkuLineItem', function(){
  var line_item = new SkuLineItem()

  it('has a quantity', function(){
    line_item.should.have.property('quantity')
  })

  it('has an item', function(){
    line_item.should.have.property('item')
  })

  it('has a price', function(){
    line_item.should.have.property('price')
  })
})


describe('DealLineItem', function(){
  var line_item = new DealLineItem()

  it('has a quantity', function(){
    line_item.should.have.property('quantity')
  })

  it('has an item', function(){
    line_item.should.have.property('item')
  })

  it('has a price', function(){
    line_item.should.have.property('price')
  })
})
