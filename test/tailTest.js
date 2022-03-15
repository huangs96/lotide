const assertEqual = require('../assertEqual')
const tail = require('../tail.js')
const returnValue = tail(["Yo Yo", "Lighthouse", "Labs"]);

assertEqual(returnValue, [ 'Lighthouse', 'Labs' ]);