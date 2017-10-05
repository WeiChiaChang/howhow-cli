#!/usr/bin/env node  
const fs = require("fs");
const meow = require('meow');
const opn = require('opn');
const chalk = require('chalk');
const VERSION = meow().pkg.version

let quotes = {
    "howhow": [
      {"J 格是 ... 大人的味道！！！": "https://youtu.be/gT8E13JkiKM?t=24s"}, 
      {"媽媽的零用錢 25 元！！喔喔～剛好可以買一罐茶之初喔～": "https://youtu.be/oxnHDXPIfCg?t=50s"},
      {"你是在供，三小。": "https://youtu.be/x-eXgAIISJU?t=1m4s"}, 
      {"可 ... 可惡": "https://youtu.be/MHYigqibzUw?t=31s"}, 
      {"嗯？你說原本要找金城武，但發現找我好像也有同樣的效果？齁喔？": "https://youtu.be/OXW7S-elkOc?t=8s"},
      {"看！陳孜昊你北七喔！": "https://youtu.be/QCi1OpD-QeE?t=20s"}, 
      {"你還是進監獄裡好好反省吧！": "https://youtu.be/r4pbqBpl1lc?t=50s"}, 
      {"我終於，也可以抬頭挺胸的說，我也是工具人了": "https://youtu.be/dCJ2doeVWmw?t=35s"}, 
      {"我想要在我的Ｘ頭上刺青，我是說舌頭啦～": "https://youtu.be/t5_yCcH9Gbs?t=6s"},
      {"喔喔喔喔喔喔喔原來是旺梨小鎮的土鳳梨酥啊！": "https://youtu.be/HM3PnOEJ1jI?t=30s"},
      {"要到了學妹的臉書，可是為什麼我要上線她就下線了，可...可惡！": "https://www.youtube.com/watch?v=V9U3AZ9rPxA"},
      {"等等，我只是沒有穿褲子啊，為什麼要逮捕我？": "https://www.youtube.com/watch?v=M7jX0chxY2M"},
      {"嚕拉拉嚕拉拉～嚕拉嚕拉勒～嚕拉～嚕拉～嚕拉～嚕拉嚕拉勒～": "https://www.youtube.com/watch?v=YXb800paJhw"},
      {"騙你的啦，我根本沒穿內褲喔！喔！差點就被你騙了呢！": "https://www.youtube.com/watch?v=YXb800paJhw"}, 
      {"孔雀餅乾，掉在地上七秒之內撿起來，更好吃": "https://www.youtube.com/watch?v=cnIELUaDgiA"},
      {"沒...沒關係我懂了，沒有控肉便當沒關係，我的車馬費再用 ATM 轉帳給我就好了，到提款機的時候，換成英文介面再打給 ...": "https://youtu.be/8xafeXzWzn4?t=1m30s"},
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
    https://youtu.be/HM3PnOEJ1jI?t=30s


    Show version
    $ howhow -v
    version is 1.0.64


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
        let random_quotes = quotes.howhow[getRandomInt(0, quotes.howhow.length - 1)];
        console.log(chalk.cyan(Object.keys(random_quotes)[0]));
        console.log(chalk.magenta(Object.values(random_quotes)[0]));
    };
};

run(process.argv.slice(2)); 
