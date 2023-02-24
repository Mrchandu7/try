module.exports.config = {
    name: "darood",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "Darood Shareef",
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
a("🌿𝐃𝐚𝐫𝐨𝐨𝐝 𝐒𝐡𝐚𝐫𝐞𝐞𝐟🌿\n\n\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، ‏‏‏‏‏‏\n\n💖ترجمہ\nاے اللہ! محمد کریم صلی اللہ علیہ وسلم اور محمد کریم صلی اللہ علیہ وسلم کی آل پر رحمت نازل کر، جیسا کہ تو نے سیدنا ابراہیم علیہ السلام اور ان کی آل پر رحمت نازل کی، یقینا تو قابل تعریف، بڑی شان والا ہے۔ \n\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ .\n\n💖ترجمہ\nاے اللہ محمد کریم صلی اللہ علیہ وسلم اور ان کی آل پر برکت نازل کر، جیسا کہ تو نے سیدنا ابراہیم علیہ السلام برکت نازل کی، یقینا تو قابل تعریف، بڑی شان والا ہے.\n\n𝐓𝐡𝐢𝐬 𝐌𝐨𝐝𝐮𝐥𝐞 𝐂𝐨𝐝𝐞 𝐁𝐲 𝐌𝐫 𝐀𝐦𝐢𝐫❤️🌿");


  }