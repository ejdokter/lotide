// function that takes in an object and returns the key of the callback function
const findKey = function(object, callback) {
  let results;
  for (const item in object) {
    if (callback(object[item])) {
      results = item;
      break;
    }
  }
  return results;
};

module.exports = findKey;