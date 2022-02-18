// takes in a string and returns an object with how many times each letter appears in the string
const countLetter = function(string) {
  let letters = {};

  for (const letter of string) {
    if (letter === " ") {
      continue;
    } if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

module.exports = countLetter;
