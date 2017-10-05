#!/usr/bin/env node  
const fs = require("fs");
const meow = require('meow');
const opn = require('opn');
const chalk = require('chalk');
const VERSION = meow().pkg.version

let quotes = {
    "howhow": [
      "J 個是～", 
      "哼，太天真了",
      "ㄅㄅ",
      "你是在供，三小。",
      "欸不，等等",
      "且慢",
      "更！陳孜昊你北七喔！", 
      "你還是進監獄裡好好反省吧！",
      "喂？小明啊～回家粗喚啦～", 
      "昊昊啊 緊來呷水果～", 
      "喔喔喔喔喔喔喔原來是旺梨小鎮的土鳳梨酥啊！",
      "要到了學妹的臉書，可是為什麼我要上線她就下線了，可...可惡！",
      "等等，我只是沒有穿褲子啊，為什麼要逮捕我？",
      "嚕拉拉嚕拉拉～嚕拉嚕拉勒～嚕拉～嚕拉～嚕拉～嚕拉嚕拉勒～",
      "騙你的啦，我根本沒穿內褲喔！喔！差點就被你騙了呢！",
      "孔雀餅乾，掉在地上七秒之內撿起來，更好吃"
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
    version is 1.0.54


    Open howhow youtube channel with Google Chrome
    $ howhow open
`);

let run = function (obj) {
    if (obj[0] === '-v') {
        console.log(`version is ${VERSION}`);
    } else if (obj[0] === '-h') {
        console.log(cli.help);
    } else if (obj[0] === 'open') {
        opn('https://www.youtube.com/user/jasonjason1124', {app: 'google chrome'});
    } else {
        console.log(chalk.cyan(quotes.howhow[getRandomInt(0, quotes.howhow.length - 1)]));
    };
};

run(process.argv.slice(2)); 
