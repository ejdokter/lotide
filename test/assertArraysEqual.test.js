const _ = require('../index')
const assertArrays = require('../eqArrays')
const assert = require('chai').assert

describe('#assertArraysEqual', () => {
  it('returns true when given [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(_.assertArraysEqual([1, 2, 3], [1, 2, 3]), true)
  })
})

