// takes an array and returns all but the first index
const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;
