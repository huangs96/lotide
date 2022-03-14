const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } 
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
  
  


// Alternate method (incomplete):
  // if (Object.keys(object1).length !== Object.keys(object2).length) { // if object1 length does not equal to object2 length, return false. We must use Object.keys in order to get the accurate length of object1 and object2 as it accesses the number of keys.
  //   return false
  // } else {
  //   for (let key1 in object1) { //if object1length = object2length, we use for in loop to take data of keys in object1
  //     if (key1 in object2) {//with data of keys taken in object, we see if the key1 is in object2
  //       if (!object1[key1].isArray) { //if key1 of object1 is not an array
  //         if (object1[key1] !== object2[key1]) { //if object1 with key1 data does not equal to object2 with key1 data (meaning if the keys are not the same), return false
  //           return false
  //         }
  //       } else {
  //         for(const element of key1) {
  //           if (Array.isArray(object1[element])) {
  //             let arrayMatch = eqArrays(object1[element], object2[element]);

  //             if (!arrayMatch) {
  //               return false
  //             }
  //           }
  //         }
  //       }
  //     }else{ 
  //       return false
  //     }
  //   } 
  // }
  // return true //if all conditions are satisfied, return true
  

const ab = { a:"1", b:"2"};
const ba = { b:"2", a:"1"};
assertEqual(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc));

console.log(eqObjects(ab,abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false

// const cd3 = { c: "1", d: ["2", 3, 4] };
// eqArrays(eqObjects(cd2, cd3));

//1. Compare lengths of both objects 
//2. If lengths are the same, then we need to compare keys
//3. If key1 in object2, then we need to compare values
//4. If keys and values are the same, return true
//5. Anytime along steps 1-4, if no match, return false




// }else{
//   return false
// }
//2. 