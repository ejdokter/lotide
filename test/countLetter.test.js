const _ = require('../index');
const assert = require('chai').assert;

describe('#countLetter', () => {
  it('returns {L: 2, H: 1} when given "LHL"', () => {
    assert.deepEqual(_.countLetter('LHL'), {L: 2, H: 1});
  });
  it('returns { t: 2, h: 1, i: 3, s: 3, a: 1, r: 1, n: 1, g: 1 } when given "this is a string"', () => {
    assert.deepEqual(_.countLetter('this is a string'), { t: 2, h: 1, i: 3, s: 3, a: 1, r: 1, n: 1, g: 1 });
  });
});