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

module.exports = flatten 
