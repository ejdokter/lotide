// function will take in a list from an array and an item to count in that array and return the amount of times that item appears in the array
const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  }
  console.log(results)
  return results
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly

