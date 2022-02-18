const countLetter = function (string) {
  let letters = {}

  for (const letter of string) {
    if (letter === " ") {
      continue;
    } if (letters[letter]) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }
  return letters
}

module.exports = countLetter

console.log(countLetter("this is a string"))

console.log(countLetter("LHL"))