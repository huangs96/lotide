const assert = require('../assertEqual')
const assertArraysEqual = require('../assertArraysEqual.js')

const returnValue = assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(returnValue);
assert(returnValue, true);