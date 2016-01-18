'use strict';

var moment = require('moment');
var multiply = require('./multiply.js');

var date = new Date(Date.now());

console.log('date', date);
console.log('date from now', moment(date).fromNow());


console.log('Resultat', multiply(3, 4));
