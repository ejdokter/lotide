const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetter("this is a string"))

console.log("hello")