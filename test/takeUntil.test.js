const _ = require('../index');
const assert = require('chai').assert;

const data2 = ["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"];


describe('#takeUntil', () => {
  it('returns [ 1, 2, 5, 7, 2 ] when given [1, 2, 5, 7, 2, -1, 2, 4, 5], data1, x => x < 0', () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],  x => x < 0), [1, 2, 5, 7, 2]);
  });
  it('returns ["Ive", "been", "to", "Hollywood"] when given ["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"], data1, x => x === ","', () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ","), ["Ive", "been", "to", "Hollywood"]);
  });
});