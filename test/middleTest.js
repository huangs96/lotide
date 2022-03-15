const assert = require('chai').assert
let middle = require('../middle');

describe("#middleTest", () => {
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

