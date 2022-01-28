const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  };
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    };
  };
  return true;
};

const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2);
  if (result === true) {
    console.log("These arrays match!")
  } else {
    console.log("These arrays do not match!")
  };
};

const without = function(source, itemsToRemove) {
  newArray = [];
  for (let i = 0; i < source.length; i++) {
    let matchedItems = false
    // console.log(source[i])
    // console.log(itemsToRemove[i])
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        matchedItems = true
        break;
    }
  }
  if (matchedItems === false) {
    newArray.push(source[i])
  }
  }
  return newArray
}

const words = ["hello", "world", "lighthouse"]

console.log(without([1, 2, 3], [2])) // => [2, 3]
console.log(without(words, ["lighthouse"]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]))
