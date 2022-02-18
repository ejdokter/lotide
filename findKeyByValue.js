const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key
    }
  }
  // for (const key of Object.keys(object)) {
  //   if (object[key] == value) {
  //     return key
  //   }
  // }
}

module.exports = findKeyByValue

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"))
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined))