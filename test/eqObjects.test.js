const _ = require('../index');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('returns true when comparing { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.isTrue(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it('returns false when comparing { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    assert.strictEqual(_.eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });
  it('returns true when comparing { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    assert.strictEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it('returns false when comparing { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    assert.strictEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
});


