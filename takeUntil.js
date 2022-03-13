const array = ['I\'ve', 'been', 'to', 'Hollywood'];

const takeUntil = function(array, callback) {
  let output = [];
  for (let x of array) {
    if (callback(x)) {
      break;
    } output.push(x);
    }
    return output;
  }


const results1 = takeUntil(array, x => x === ",");
console.log(results1);

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
}


const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
}

assertArraysEqual(takeUntil(array, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

