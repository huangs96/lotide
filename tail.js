const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array) {
  let newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
console.log(tail(words));
// console.log(words);
// console.log(words.length, 2);
// console.log(words[0], 'Lighthouse');
// console.log(words[2], 'Labs');

module.exports = tail;