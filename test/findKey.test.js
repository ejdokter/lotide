const _ = require('../index')
const assert = require('chai').assert

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

describe('#findKey', () => {
  it('returns "noma" when passing testObject, x => x.stars === 2', () => {
    assert.deepEqual(_.findKey(testObject, x => x.stars === 2), "noma")
  })
  it('returns "Blue Hill" when passing testObject, x => x.stars === 1', () => {
    assert.deepEqual(_.findKey(testObject, x => x.stars === 1), "Blue Hill")
  })
  it('returns "Akaleri" when passing testObject, x => x.stars === 3', () => {
    assert.deepEqual(_.findKey(testObject, x => x.stars === 3), "Akaleri")
  })
})