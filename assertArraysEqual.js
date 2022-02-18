const eqArrays = require('./eqArrays');
// compares two arrays and logs a pass or fail statement
const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1, array2);
  if (result === true) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
