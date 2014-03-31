/* mocha tests for deal model */

var Deal = require('../models/deal')
  , LineItem = require('../models/line_item').SkuLineItem


describe('Deal', function(){
  var deal = new Deal()

  it('has an id', function(){
    deal.should.have.property('id')
  })

  it('has a name', function(){
    deal.should.have.property('name')
  })

  it('has a start', function(){
    deal.should.have.property('start')
  })

  it('has a stop', function(){
    deal.should.have.property('stop')
  })

  it('has skus (which are actually line items, but are called skus for congruency)', function(){
    deal.should.have.property('skus')
  })

  describe('skus', function(){
    it('can push line items', function(){
      var line_item = new LineItem()
      deal.skus.push(line_item)
      deal.skus.length.should.equal(1)
    })
  })

  it('has a customer choice', function(){
    deal.should.have.property('customer_choice')
  })
})
