const eqArrays = require('./eqArrays');
// compares two objects and returns true if they are the same and false if they are not
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // using eqArrays to compare the arrays in the object
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    
    }
  }
  return true;
};

module.exports = eqObjects;
