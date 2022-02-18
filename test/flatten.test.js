const _ = require('../index')
const assert = require('chai').assert

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })
  it('returns [1, 2, 3, 4] when given [1, 2, [3, 4]]', () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4]]), [1, 2, 3, 4])
  })
  it('returns [1, 5, 3] when given [1, 5, 3]', () => {
    assert.deepEqual(_.flatten([1, 5, 3]), [1, 5, 3])
  })
  it('returns [] when given []', () => {
    assert.deepEqual(_.flatten([]), [])
  })
}) 