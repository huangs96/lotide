const assertEqual = require('../assertEqual')
const head = require ('../head.js')

const returnValue = head([5,6,7]);
assertEqual(returnValue, 5);