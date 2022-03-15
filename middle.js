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
// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
//   }
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
//     }
//   }
//   return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
// }

let middle = function(array) {
  if (array.length < 3) {
    return [];
  } 
  if (array.length % 2 !== 0) {
    let x = Math.floor(array.length/2) //We let x store the value of Math.floor. We need to round down because the index will always be the lower number of the length. For example the index we are looking for in [1,2,3,4,5] is [2]
    return [array[x]]
  } else {
    let y = array.length/2
    return [array[y-1],array[y]] //y-1 first as it is lesser value, we want two values so we need to output two arrays
  } 
};
// console.log(middle([1,2]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// // assertArraysEqual(middle[1,2,3,4], [1,2])
// console.log(middle([1,2,3,4]));

module.exports = middle;