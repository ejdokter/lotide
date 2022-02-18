const _ = require('../index')
const assert = require('chai').assert

describe('#without', () => {
  it('returns [1, 3] when given [1, 2, 3], [2]', () => {
    assert.deepEqual(_.without([1, 2, 3], [2]), [1, 3])
  })
  it('returns ["hello", "world"] when given ["hello", "world", "lighthouse"], ["lighthouse"]', () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"])
  })
  it('returns ["1", "2"] when given ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  })
})



