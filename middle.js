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
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`)
  } else{
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`)
  }
}

const middle = function (array) {
  let middleIndex = []
  if (array.length <= 2) {
    return []
  }
  if (array.length % 2 != 0) {
    middleIndex.push(array[Math.floor(array.length/2)])
  } 
  if (array.length % 2 == 0) {
    middleIndex.push(array[Math.floor(array.length / 2 - 1)])
    middleIndex.push(array[Math.floor(array.length / 2)])
  }
  return middleIndex
} 

console.log(middle([1, 2, 3, 4]))
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])