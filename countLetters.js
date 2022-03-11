const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(words) {
  const newArr = words.split(" ").join("");
  //dictionary result
  const results = {};
  let total = 0;
  console.log(newArr)
  for (let letters of newArr) { //for all letters of newArr
      console.log(letters)
      if (letters in results){//letters are incremented 1 by 1 into the code below, if letters are in results
        results[letters] = results[letters] + 1 //if letter does not show in the results, it will go to the code below. If it shows in the results, then it will +1 to value
      }else{
        results[letters] = 1 //if letter does not show in the result, it will create the key with the value 1.
      } 
    }
  return results
  }
console.log(countLetters('I am a test'));

