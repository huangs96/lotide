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

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const without = function(original, removeItem) {
  let num = 0; //num to count numbers to replace
  for (let i = 0; i < original.length; i++) { //first loop through for original numbers
    for (let x = 0; x < removeItem.length; x++) { //second loop through for the numbers we need to remove
      if (original[i] === removeItem[x]) {
        num += i; //everytime index in original equals index in removeItem, add that index to num
      }
    }
  }
  let newArray = original.slice();
  newArray.splice(num, 1); //we use splice because we want to completely output a new array. We are removing 1 element
  return newArray
};
console.log(without([1, 2, 3], [1])) 
// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) 
// => ["1", "2"]
