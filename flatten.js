const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log("These arrays match!")
  } else{
    console.log("These arrays do not match!")
  }
}

const flatten = function (array) {
  let flattened = []
  for (let i = 0; i < array.length; i++) {
    let stored = array[i]
    if (!Array.isArray(stored)) {
      flattened.push(stored)
      continue
    }
    for (let j = 0; j < stored.length; j++) {
      flattened.push(stored[j])
    }
  }
  return flattened
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))