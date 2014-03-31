/* mocha tests for sku model */

var Sku = require('../models/sku')
  , supertest = require('supertest')
  , api = supertest('http://localhost:5000')


describe('Sku [unit]', function(){
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
    it('exist', function(){
      sku.should.have.property('tags')
    })

    it('can have color', function(){
      sku.set('tags.color', 'blue')
      sku.get('tags.color').should.equal('blue')
    })
  })
})


describe('Sku [integration]', function () {
  var sku = new Sku()
  var id = ''

  it('can get a list of skus', function () {
    api.get('/skus')
      .expect(200)
  })

  it('can create a new sku')

  it('can select a sku')

  it('can update a sku')

  it('can delete a sku')

  it('will fail creation without specified sku fields')

  it('will fail select with an incorrect id')

  it('will fail update with an incorrect id')

  it('will fail delete with an incorrect key')
})
