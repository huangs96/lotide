const letterPositions = function(sentence) {
  const results = {};
  const modSentence = sentence.split(" ").join(""); //split sentence with " " and rejoin to get rid of spaces

  for (let i = 0; i < modSentence.length; i++) { //loop through modified sentence
    results[modSentence[i]] = [] //add number found by loop to modSentence, use [] to push into object
  }

  for (let i = 0; i < modSentence.length; i++) { // second loop to find the letter from modSentence
    const letter = modSentence[i]; //store modSentence index data into letter variable
    results[letter].push(i); //push [i] from modSentence to results with []
  }
  // logic to update results here
  return results;
};
console.log(letterPositions("Lighthouse in the house"));

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

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Lighthouse in the house"));