const assert = require('chai').assert
const assertEqual = require('../assertEqual.js')

describe("#assertEqualTest", () => {
  it("returns [1, 2, 3] for ([1, 2, 3]", () => {
    assert.strictEqual(assertEqual([1, 2, 3], [1, 2, 3]));
  });
});