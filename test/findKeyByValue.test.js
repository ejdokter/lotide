const _ = require('../index')
const assert = require('chai').assert

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('returns "drama" when given "The Wire"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
  it('returns undefined when given "That 70s Show"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined)
  })
  it('returns "sci_fi" when given "The Expanse"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  })
})

