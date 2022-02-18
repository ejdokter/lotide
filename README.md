# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ejdokter/lotide`

**Require it:**

`const _ = require('@ejdokter/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Compares two arrays and logs a pass or fail statement
* `function2(assertEqual)`: compares an actual value and an expected value and logs a pass or fail statement
* `function3(assertObjectsEqual)`: compares two objects and logs a pass or fail statement
* `function1(countLetter)`: takes in a string and returns an object with how many times each letter appears in the string
* `function1(countOnly)`: function will take in a list from an array and an item to count in that array and return the amount of times that item appears in the array
* `function1(eqArrays)`: eqArrays function that takes in 2 arrays and returns true or false
* `function1(eqObjects)`: compares two objects and returns true if they are the same and false if they are not
* `function1(findKey)`: function that takes in an object and returns the key of the callback function
* `function1(findKeyByValue)`: function takes in an object and a value and returns the key that the value is located at
* `function1(flatten)`: takes in an array and if there are multiple arrays inside the array it will take them out and return one array with all values
* `function1(head)`: function that takes in an array and returns the first value of that array
* `function1(letterPositions)`: function takes in a string and will return the index's of the letter defined at the end
* `function1(map)`: takes in an array and a callback and executes the callback on the items in the array
* `function1(middle)`: takes an array and returns the value in the center
* `function1(tail)`: takes an array and returns all but the first index
* `function1(takeUntil)`: function will take an array and a callback and will create a new array with everything before the callback
* `function1(without)`: function will produce a new array from the source with the itemsToRemove removed from it
