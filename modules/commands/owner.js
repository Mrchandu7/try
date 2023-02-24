module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n\n𝐌 𝐀𝐦𝐢𝐫\n\n𝐀𝐠𝐞 : 17\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐬𝐢𝐧𝐠𝐥𝐞\n\n𝐅𝐫𝐨𝐦 :  𝐌𝐋𝐓𝐍 𝐃𝐆𝐊\n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/M.AMIR.006\n\n𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : 03477034310\n\n اور پھر سب کُچھ ختم ہو جانے کے بعد بس ایک ہی اُمید باقی رہ جاتی ہے کہ ؛ اللہ پاک ہیں نہ ، وہ سب ٹھیک کر دیں گے انشاءاللہ! ۔ ❤🙂\n\n♣️𝐀𝐥𝐥 𝐓𝐡𝐞 𝐂𝐫𝐞𝐝𝐢𝐭𝐬 𝐆𝐨𝐞𝐬 𝐓𝐨 𝐌𝐫 𝐀𝐦𝐢𝐫♣️");
setTimeout(() => {a({body: "🔰𝙎𝙀𝘾𝙊𝙉𝘿 𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n\n𝐅𝐚𝐭𝐢𝐦𝐚\n\n𝐀𝐠𝐞 : 17\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐬𝐢𝐧𝐠𝐥𝐞\n\n𝐅𝐫𝐨𝐦 : 𝐋𝐇𝐑\n\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :https://www.facebook.com/100049911214237\n\n°•𓆩🤍𓆪•°\n\n تـکـلـف مَـت کـیـجـیـے  \n\n آپ کـے مـزاج کـے نـہـیـں ہـیـں ہـم 💜🌼𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 :𝘈𝘤𝘩𝘢 𝘢𝘣 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘕𝘶𝘮 𝘊𝘩𝘢𝘠𝘸 𝘓𝘢𝘳𝘬𝘪 𝘬𝘢 𝘚𝘩𝘢𝘳𝘮 𝘬𝘳 𝘭𝘖 𝘉𝘩𝘢𝘪\n\n♣️𝐓𝐡𝐞 𝐂𝐫𝐞𝐝𝐢𝐭𝐬 𝐆𝐨𝐞𝐬 𝐓𝐨  𝐅𝐚𝐭𝐢𝐦𝐚♣️" })}, 3000);

  }