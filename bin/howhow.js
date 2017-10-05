#!/usr/bin/env node  
const fs = require("fs");
const meow = require('meow');

let quotes = {
    "howhow": [
      "J 個是～", 
      "更！陳孜昊你北七喔！", 
      "你還是進監獄裡好好反省吧！",
      "喂？小明啊～回家粗喚啦～", 
      "昊昊啊 緊來呷水果～", 
      "喔喔喔喔喔喔喔原來是旺梨小鎮的土鳳梨酥啊！",
      "要到了學妹的臉書，可是為什麼我要上線她就下線了，可...可惡！"
    ]
};
// console.log(quotes);

let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const cli = meow(`
    Examples

    $ howhow
    喔喔喔喔喔喔喔原來是旺梨小鎮的土鳳梨酥啊！

    Show version

    $ howhow -v
    version is 1.0.36
`);

let run = function (obj) {
    if (obj[0] === '-v') {
        console.log('version is 1.0.36');
    } else if (obj[0] === '--help') {
        console.log(cli);
    } else {
        console.log(quotes.howhow[getRandomInt(0, quotes.howhow.length - 1)]);
    };
};

run(process.argv.slice(2)); 
