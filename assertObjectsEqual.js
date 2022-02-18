const eqObjects = require('./eqObjects');
// compares two objects and logs a pass or fail statement
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  let result = eqObjects(object1, object2);
  if (result === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;