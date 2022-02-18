const _ = require('../index')
const assert = require('chai').assert

describe('#letterPositions', () => {
  it('returns [1] when given "hello".e', () => {
    assert.deepEqual(_.letterPositions("hello").e, [1])
  })
  it('returns [3, 5, 15, 18] when given "lighthouse in the house".h', () => {
    assert.deepEqual(_.letterPositions("lighthouse in the house").h, [3, 5, 15, 18])
  })
  it('returns undefined when given "hello".x', () => {
    assert.deepEqual(_.letterPositions("hello").x, undefined)
  })
  it('returns [2, 3] when given "hello".l', () => {
    assert.deepEqual(_.letterPositions("hello").l, [2, 3])
  })
})