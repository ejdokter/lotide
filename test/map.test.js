const _ = require('../index')
const assert = require('chai').assert

describe('#map', () => {
  it("returns ['g', 'c', 't', 'm', 't'] when given ['ground', 'control', 'to', 'major', 'tom'], word => word[0]", () => {
    assert.deepEqual(_.map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]), ['g', 'c', 't', 'm', 't'])
  })
  it("returns [2, 4, 6, 88, 110, 132, 166] when given [1, 2, 3, 44, 55, 66, 83], num => num * 2", () => {
    assert.deepEqual(_.map([1, 2, 3, 44, 55, 66, 83], num => num * 2), [2, 4, 6, 88, 110, 132, 166])
  })
  it("returns ['happy', 'clearly', 'crazy', 'gloomy'] when given ['happ', 'clearl', 'craz', 'gloom'], word => word + 'y'", () => {
    assert.deepEqual(_.map(['happ', 'clearl', 'craz', 'gloom'], word => word + 'y'), ['happy', 'clearly', 'crazy', 'gloomy'])
  })
})