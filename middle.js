// takes an array and returns the value in the center
const middle = function(array) {
  let middleIndex = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    middleIndex.push(array[Math.floor(array.length / 2)]);
  }
  // if there are 2 middle values
  if (array.length % 2 === 0) {
    middleIndex.push(array[Math.floor(array.length / 2 - 1)]);
    middleIndex.push(array[Math.floor(array.length / 2)]);
  }
  return middleIndex;
};

module.exports = middle;

