const tail = require('../tail')
const assertEqual = require('../assertEqual')

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).length, 2);
assertEqual(words.length, 3)