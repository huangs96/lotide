const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arr1, arr2) {
  if (arr1 !== arr2) {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
}

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     } 
//   }
//   return true;
// }
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = assertArraysEqual;
