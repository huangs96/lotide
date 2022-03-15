const assert = require('chai').assert
const tail = require('../tail.js')
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.equal(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});