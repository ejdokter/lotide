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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    } else if (object1[key] !== object2[key]) {
      return false
    
    } 
  }
  return true
}

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  let result = eqObjects(object1, object2)
  if (result === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)   
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2)



// const assertArraysEqual = function (array1, array2) {
//   let result = eqArrays(array1, array2)
//   if (result === true) {
//     console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`)
//   } else{
//     console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`)
//   }
// }