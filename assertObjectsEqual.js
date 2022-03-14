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

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } 
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
};


const eqObjects = function(object1, object2) {
  let a1Keys = Object.keys(object1);
  let a2Keys = Object.keys(object2); //grabbing key data from object1 and object2

  if (a1Keys.length !== a2Keys.length) {
    return false; //if lengths of key data are different, return false
  }

  for(const element of a1Keys) { // loop through a1keys storing data in element variable
    if (Array.isArray(object1[element])) {// if object1[element] is array
      let arrayMatch = eqArrays(object1[element], object2[element]); //check on eqArrays

      if (!arrayMatch) { //if not an array, return false
        return false
      }
    } else if (object1[element] !== object2[element]) {
        return false; //if object1 element does not equal object2 element
    }
  }
  return true;
};


const ab = { a:"1", b:"2"};
const ba = { b:"2", a:"1"};
assertObjectsEqual(eqObjects(ab, ba));