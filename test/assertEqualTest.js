const assert = require('chai').assert
const assertArraysEqual = require('../assertArraysEqual.js')
const eqArrays = require('../eqArrays.js')

describe("#assertArraysEqualTest", () => {
  it("returns [1, 2, 3] for ([1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])), true)
  });
});