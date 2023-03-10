module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] ā¢ ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `ššØš§š§ššš­šš šš®šššš¬š¬šš®š„š„š²Ā«
  š°ššš°š»š°š¼  š¾  š°š»š°šøšŗšš¼āļø
<<<<<------------------------------>>>>>  

ššš šššššššš ššššš šš šššš šššššā
<<<<<------------------------------>>>>>

TO VIEW ANY COMMAND
\n\nUse ${global.config.PREFIX}help to see commands List.\n\nexample :\n\n${global.config.PREFIX}Quran (text)\n\n${global.config.PREFIX} Owner\n\n${global.config.PREFIX}Help2(all commands)\n\n${global.config.PREFIX}info (admin information)\n
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER\n\n
ą¼»ššššš:- āĪ±Š¼Ī¹Ń & āĪ±ĻĻĻāā \n\ną¼ŗ
ą¼ ć Š²ŃĻŠŗĪµĪ· Š²ĻŅÆ ŅĪ±ŃĪ¹Š¼Ī±ć .ą¼

ą¼ššššššØšØš¤ šš¢š§š¤š¬ą¼:- ā www.facebook.com/M.AMIR.006\nhttps://www.facebook.com/100049911214237 ā 

 Ų§ŁŲ± Ł¾Ś¾Ų± ŲÆŪŚ©Ś¾ŁŲ§...!
*Ų§ŪŚ© ŲÆŁ ŁŪŚŗ ŲŖŁŪŲ§Ų±Ū ŁŪŪ Ś©Ų§Ų“ ŪŁ Ų¬Ų§Ų¤Śŗ ŚÆŲ§*šš 
`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "šš„š„šØš° šššš²š« {name}, ššš šš©šš šš¬ šš«šØšš© š¦š šš§š š©š šš¢š„ šš² ššš„ššØš¦š š¤šš­š² šš§ā­šā¤ļø\n\nš¾š§šššš©: Š²ŃĻŠŗĪµĪ· Š²ĻŅÆ Ī±Š¼Ī¹Ń " : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}
