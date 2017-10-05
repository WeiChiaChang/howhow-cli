#!/usr/bin/env node  
var fs = require("fs"),
    path = process.cwd();

var howhow_quotes = [
    "J 個是～", "陳孜昊你北七喔！"
]

var getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var run = function (obj) {
    if (obj[0] === '-v') {
        console.log('version is 1.0.0');
    } else if (obj[0] === '-h') {
        console.log('Usage:');
        console.log('  -v --version [show version]');
    } else {
        console.log(howhow_quotes[getRandomInt(0, howhow_quotes.length - 1)]);
      };
};

run(process.argv.slice(2)); 
