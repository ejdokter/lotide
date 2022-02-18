const _ = require('../index');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('return 1 when given "Jason"', () => {
    assert.deepEqual(result["Jason"], 1);
  });
  it('return undefined when given "Karima"', () => {
    assert.deepEqual(result["Karima"], undefined);
  });
  it('return 2 when given "Fang"', () => {
    assert.deepEqual(result["Fang"], 2);
  });
  it('return undefined when given "Agouhanna"', () => {
    assert.deepEqual(result["Agouhanna"], undefined);
  });
});