/* mocha tests for sku model */

var Sku = require('../models/sku')


describe('Sku', function(){
  var sku = new Sku()

  it('has an id', function(){
    sku.should.have.property('id')
  })

  it('has a brand', function(){
    sku.should.have.property('brand')
  })

  it('has a name', function(){
    sku.should.have.property('name')
  })

  it('has a weight', function(){
    sku.should.have.property('weight')
  })

  describe('tags', function(){
    it('has tags', function(){
      sku.should.have.property('tags')
    })

    it('can have color', function(){
      sku.set('tags.color', 'blue')
      sku.get('tags.color').should.equal('blue')
    })
  })
})
