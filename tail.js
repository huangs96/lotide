const words = ["Yo Yo", "Lighthouse", "Labs"];
let tail = words.slice(1);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(words);
assertEqual(words.length, 2);
assertEqual(words[0], 'Lighthouse');
assertEqual(words[1], 'Labs');
