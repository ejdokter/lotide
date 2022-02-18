// function will take an array and a callback and will create a new array with everything before the callback
const takeUntil = function(array, callback) {
  let results = [];
  for (let num of array) {
    if (callback(num)) {
      break;
    }
    results.push(num);
  }
  return results;
};

module.exports = takeUntil;
