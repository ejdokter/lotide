const _ = require('../index');
const assert = require('chai').assert;

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] when given ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("return [] when given ['Yo Yo']", () => {
    assert.deepEqual(_.tail(['Yo Yo']), []);
  });
});

