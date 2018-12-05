#!/usr/bin/env node  
const fs = require("fs");
const meow = require('meow');
const opn = require('opn');
const chalk = require('chalk');
const VERSION = meow().pkg.version

let quotes = {
    "howhow": [
      {"J 格是 ... 大人的味道！！！": "https://youtu.be/gT8E13JkiKM?t=24s"},
      {"你擔心你的髮線越來越高嘛？": "https://youtu.be/mX0zftdV_YY"},
      {"不會下雨啦～下雨我剃光頭": "https://youtu.be/uq2rnYHYkm4?t=2s"}, 
      {"Gogoro？............水啦": "https://youtu.be/1mogGtuM4yU?t=6s"}, 
      {"啃！要做就要做好做滿啊！": "https://youtu.be/HBttCr5H-V4?t=12s"}, 
      {"克寧奶粉 ... 踢足球 ... 席丹 ... 席丹是法國人 ... 法國人 ... 法國倫 ... 黃國倫 ... 黃國倫老婆是寇乃馨 ... 康乃馨！": "https://www.youtube.com/watch?v=y_RSpoXT1LM"}, 
      {"我的阿嬤逆啊～～": "https://youtu.be/9xXboTLZ1R0?t=37s"}, 
      {"我埋的。是對未來。塵封的期許。": "https://youtu.be/Rf-wZfPtPss?t=18s"}, 
      {"種子種子，種子種子種子，種子，種子種子種子種子種子": "https://youtu.be/NN9LaU2NlLM"}, 
      {"直播伯伯剝橘子": "https://youtu.be/6Tz1A2FiRdo?t=7s"}, 
      {"啊啊啊啊～ 我好興奮 R～～": "https://youtu.be/XzQhdyJqXrE?t=2s"}, 
      {"很臭，走開": "https://youtu.be/mk6RX20Zz00?t=1m4s"}, 
      {"抱歉，你是誰啊？": "https://youtu.be/mk6RX20Zz00?t=4m46s"}, 
      {"其實我寄貨的時候很粗心，我不小心把我住信義區 80 坪的地契影本，還有我開 Maserati 的時候，我朋友幫我拍的拍立得照片留在口袋": "https://youtu.be/fqfdtEaR3aI?t=18s"}, 
      {"他才不是什麼恐龍裝啊！他是嗶之助啊！": "https://youtu.be/gax2FoEvNiY?t=50s"},
      {"想想快絕種的北極熊吧，想想正在洗澡的雞排妹吧 ... 嘶 ...": "https://youtu.be/4p6idASFZ4Q?t=1m4s"},
      {"大家一起賺五億，大家一起把朋友拉進購物社團吧～！": "https://youtu.be/H6cOUWePs2o?t=1m18s"}, 
      {"嗶你妹個悠遊卡啦": "https://youtu.be/gax2FoEvNiY?t=54s"}, 
      {"粗獷，到底是念粗 ㄍㄨㄤˇ 還是粗 ㄎㄨㄤˋ ？": "https://youtu.be/arqfJjOXr1M?t=58s"}, 
      {"不拖泥帶水！直接進入業配主題～！": "https://youtu.be/3WMnPid4ItY?t=6s"}, 
      {"嘿嘿嘿嘿，腹黑屋老闆你，你也挺壞的嘛～": "https://youtu.be/0o27JM6Foqk?t=20s"}, 
      {"不會動的手錶，一天至少會對 ... 兩次 ...！": "https://youtu.be/t5_yCcH9Gbs?t=42s"}, 
      {"你幹話也蠻多的嗎～": "https://youtu.be/SFdO_BOJR8c?t=1m4s"}, 
      {"你才禿頭啦！！你全家都禿頭啦！！": "https://youtu.be/E9zWRgLyBvA?t=16s"}, 
      {"你沒有妹妹": "https://youtu.be/yugMf7YLWMg?t=58s"}, 
      {"我們一起看夜景，出遊，撿肥皂，這些，都是假的嗎？？": "https://youtu.be/RjN0qIDJ7Cg?t=1m23s"}, 
      {"不是長的像金城武的病啦，那個已經是絕症了": "https://youtu.be/B7BRiuQpo4g?t=2s"}, 
      {"J 三 ... 小": "https://youtu.be/ca5s_atUEqo?t=1m23s"}, 
      {"這 ... 阿伯也包太大包了吧！不是阿伯下面一大包，是阿伯的紅包啊！！": "https://youtu.be/7GazAryr-2U?t=4s"}, 
      {"誒，你看我下面這一大包 ...... 衛生紙啦～": "https://youtu.be/J8KiAifnKcU?t=1m1s"}, 
      {"haohao 啊～緊來呷水果喔～": "https://youtu.be/Y3Hg52ndjhk?t=40s"}, 
      {"現在時間，洞五三洞，安全士官請部隊起床～": "https://youtu.be/ahtHt4P4bLU?t=1m28s"}, 
      {"討厭，你在想色色的事情對吧～": "https://youtu.be/6SaIoFI41is?t=40s"}, 
      {"喔Ｘ！ 爸的！": "https://youtu.be/Y3Hg52ndjhk?t=3s"}, 
      {"四郎，幫我開火！...差點忘記我沒朋友": "https://youtu.be/n5H6fwhN2G8?t=28s"}, 
      {"況且那天 ... 我只是經過內衣店而已 ...": "https://youtu.be/-SWj9RxmMJg?t=12s"}, 
      {"於是我就很高興的走過去用皮卡丘語跟他說，皮卡皮卡，然後他就跟我說，哩洗勒公殺洨啦耖零呆。": "https://youtu.be/x747xuzG3Yo?t=4s"}, 
      {"最新鮮早上才到港的鯛魚，精湛的刀工，最重要的是用冰刀去處理，來了！": "https://youtu.be/lyHm6y8X42A?t=1m29s"}, 
      {"齁～我要告老師～": "https://youtu.be/gruBdVkxzMY?t=4s"}, 
      {"喔～～～": "https://youtu.be/L3yTPkBtFlw?t=1m14s"}, 
      {"媽媽的零用錢 25 元！！喔喔～剛好可以買一罐茶之初喔～": "https://youtu.be/oxnHDXPIfCg?t=50s"},
      {"你是在供，三小。": "https://youtu.be/x-eXgAIISJU?t=1m4s"}, 
      {"可 ... 可惡": "https://youtu.be/MHYigqibzUw?t=31s"},
      {"呱吉爆雷王，呱吉吃大便～": "https://youtu.be/lXQvJ0-U2_s?t=2m40s"}, 
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
      {"想要一起加入 How 哥宇宙嗎？": "https://youtu.be/DSYLan4xT8s?t=1m25s"},
      {"第一次求婚，好緊張", "https://www.youtube.com/watch?v=A8Z8dEJ8YPo"}
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
    version is 1.0.86


    Open howhow youtube channel with Google Chrome
    $ howhow open

    See howhow on TED Talk
    $ howhow ted

    Source code of this side project
    $ howhow github
`);

let run = function (obj) {
    if (obj[0] === '-v') {
        console.log(`version is ${VERSION}`);
    } else if (obj[0] === '-h') {
        console.log(cli.help);
    } else if (obj[0] === 'open') {
        opn('https://www.youtube.com/user/jasonjason1124', {app: 'google chrome'});
    } else if (obj[0] === 'ted') {
        opn('https://www.youtube.com/watch?v=75P2sG7Fk9k', {app: 'google chrome'});
    }  else if (obj[0] === 'github') {
        opn('https://github.com/WeiChiaChang/howhow-cli', {app: 'google chrome'});
    } else {
        let random_quotes = quotes.howhow[getRandomInt(0, quotes.howhow.length - 1)];
        console.log(chalk.cyan(Object.keys(random_quotes)[0]));
        console.log(chalk.magenta(Object.values(random_quotes)[0]));
    };
};

run(process.argv.slice(2)); 
