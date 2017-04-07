
((module) => {
  'use strict'

  var createClassFromSuper = require('simple-class-utils').createClass.super
  var recursiveConstructor = require('x-iterable-utils/recursive-constructor')
  var manySameElements = require('x-iterable-utils/many-same-elements')
  var ProductIterableSuper = require('x-iterable-utils/appx-super-class')(build, iterate)

  class ProductIterable extends ProductIterableSuper {
    static times (...args) {
      return ProductIterable.pow(...args)
    }

    static pow (iterable, exponent) {
      var args = manySameElements(iterable, exponent)
      return args.length ? new ProductIterable(...args) : []
    }
  }

  module.exports = ProductIterable

  ProductIterable.Result = createClassFromSuper(Array)

  function build (self, ...args) {
    return recursiveConstructor(self, ProductIterable, (value) => [value], ...args)
  }

  function * iterate () {
    var {first, second} = this
    for (let i of first) {
      for (let j of second) {
        yield new ProductIterable.Result(i, ...j)
      }
    }
  }
})(module)
