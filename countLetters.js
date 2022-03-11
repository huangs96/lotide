const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(words) {
  const newArr = words.split(" ").join("");
  const results = {};
  let total = 0;

  for (let letters of newArr) {
    // console.log(letters)
    if (letters !== newArr[letters]){ //if firstLetter does not equal to the looped [letters] of newArr
      letters = newArr[letters];// letters equals to newArr[letters]
        results[letters] = total;//results[letters] will = 0;
        // console.log(total);
      }
      if (letters === newArr[letters]) {//if firstLetter is equal to newArr[letters]
        results[newArr[letters]]++//results will increment based on newArr[letters]
        // console.log(results)
      }
    } return results
    }
console.log(countLetters('I am a test'));