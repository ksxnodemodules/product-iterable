
# product-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Make a Cartesian product of iterables

 * Create a Cartesian power of an iterable

# Usage

## Import

```javascript
var ProductIterable = require('product-iterable');
```

## Constructor

> Cartesian product of iterables

### Form

```javascript
var product = new ProductIterable(...iterables);
```

Where:

 * `...iterables` are finite iterable objects

 * `product` is an iterable of tuples

### Example

```javascript
var product = new ProductIterable('abc', [0, 1, 2, 3]);
console.log(new Set(product));
```

You would seen a set of `(character, number)` pairs

## Function: `::pow` a.k.a `::times`

> Cartesian power of an iterable

### Form

```javascript
var power = ProductIterable.pow(iterable, exponent);
```

Where:

 * `iterable` is a finite iterable object

 * `exponent` is an unsigned integer

### Example

```javascript
var power = ProductIterable.pow('abcd', 3);
console.log(new Set(power));
```

Just like `new ProductIterable('abcd', 'abcd', 'abcd')`, you would seen a set of 4<sup>3</sup> arrays
