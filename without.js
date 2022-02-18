// function will produce a new array from the source with the itemsToRemove removed from it
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let matchedItems = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        matchedItems = true;
        break;
      }
    }
    if (matchedItems === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;


