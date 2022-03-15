const assert = require('../assertEqual');
const eqArrays = require('../eqArrays');
 const returnValue = eqArrays([1, 2, 3], [1, 2, 3]);
assert(returnValue, true);

