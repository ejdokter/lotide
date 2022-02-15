const tail = require('../tail')
const assert = require('chai').assert

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] when given ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  })
  it("return [] when given ['Yo Yo']", () => {
    assert.deepEqual(tail(['Yo Yo']), [])
  })
})

