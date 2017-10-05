#!/usr/bin/env node  
let fs = require("fs"),
    path = process.cwd();

let quotes = JSON.parse(fs.readFileSync('../src/quotes.json', 'utf8'));
// console.log(quotes);

let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let run = function (obj) {
    if (obj[0] === '-v') {
        console.log('version is 1.0.0');
    } else if (obj[0] === '-h') {
        console.log('Usage:');
        console.log('  -v --version [show version]');
    } else {
        console.log(quotes.howhow[getRandomInt(0, quotes.howhow.length - 1)]);
    };
};

run(process.argv.slice(2)); 
