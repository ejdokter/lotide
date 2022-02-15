const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])