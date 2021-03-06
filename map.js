// takes in an array and a callback and executes the callback on the items in the array
const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};

module.exports = map;
