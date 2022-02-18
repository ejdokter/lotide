const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 44, 55, 66, 83]
const addY = ['happ', 'clearl', 'craz', 'gloom']

function map(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item))
  }
  return results;
}

module.exports = map
const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
const results3 = map(addY, word => word + 'y');
console.log(results3);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
// assertArraysEqual(results2, [2, 4, 6, 88, 110, 132, 166])
// assertArraysEqual(results3, ['happy', 'clearly', 'crazy', 'gloomy'])