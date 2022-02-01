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

const letterPositions = function (sentence) {
  const results = {}

  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence.indexOf(letter))
    if (sentence[i] === " ") {
      continue;
    } if (!results[sentence[i]]) {
        results[sentence[i]] = []
    }   
    results[sentence[i]].push(i)
  }
  return results
}

console.log(letterPositions("lighthouse in the house"))
console.log(assertArraysEqual(letterPositions("hello").e, [1]))