
((module) => {
  'use strict'

  const createClassFromSuper = require('simple-class-utils').createClass.super
  const recursiveConstructor = require('x-iterable-utils/recursive-constructor')
  const manySameElements = require('x-iterable-utils/many-same-elements')
  const ProductIterableSuper = require('x-iterable-utils/appx-super-class')(build, iterate)

  class ProductIterable extends ProductIterableSuper {
    static times (...args) {
      return ProductIterable.pow(...args)
    }

    static pow (iterable, exponent) {
      const args = manySameElements(iterable, exponent)
      return args.length ? new ProductIterable(...args) : []
    }
  }

  module.exports = ProductIterable

  ProductIterable.Result = createClassFromSuper(Array)

  function build (self, ...args) {
    return recursiveConstructor(self, ProductIterable, (value) => [value], ...args)
  }

  function * iterate () {
    const {first, second} = this
    for (const i of first) {
      for (const j of second) {
        yield new ProductIterable.Result(i, ...j)
      }
    }
  }
})(module)
