// takes in an array and if there are multiple arrays inside the array it will take them out and return one array with all values
const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    let stored = array[i];
    if (!Array.isArray(stored)) {
      flattened.push(stored);
      continue;
    }
    for (let j = 0; j < stored.length; j++) {
      flattened.push(stored[j]);
    }
  }
  return flattened;
};

module.exports = flatten;
