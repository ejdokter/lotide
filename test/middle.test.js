// const middle = require('../middle')
const _ = require('../index')
const assert = require('chai').assert

describe('#middle', () => {
  it('return [2, 3] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3])
  })
  it('return [6] when given [3, 6, 8]', () => {
    assert.deepEqual(_.middle([3, 6, 8]), [6])
  })
  it('return [] when given [1, 2]', () => {
    assert.deepEqual(_.middle([1, 2]), [])
  })
})
