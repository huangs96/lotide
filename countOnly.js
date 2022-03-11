const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
//This function is to find if the name exists in the object. If it is, it will return the object value of +1 and incremetned in "results"
const countOnly = function(allItems, itemsToCount) { //All items applies to first names in line 36, itemsToCount applies to the object which is {"jason:true"..etc}
const results = {}; //Empty object to plug the data in the loop
for (const item of allItems) {
if (itemsToCount[item]){ //if the value [item] is found within the object[itemsToCount]
  if (results[item]) {//if [item] is found within the new results object
    results[item] += 1;//Add 1 value to results
  } else {
    results[item] = 1;//Else value is 1
  }
}
} return results
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  // "Jason"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);