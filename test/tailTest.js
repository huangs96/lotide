const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail.js')
const returnValue = tail(["Yo Yo", "Lighthouse", "Labs"]);

assertArraysEqual(returnValue, [ 'Lighthouse', 'Labs' ]);