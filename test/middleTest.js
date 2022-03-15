const assertArraysEqual = require('../assertArraysEqual');
let middle = require('../middle');

const returnValue = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(returnValue, [3,4]);

