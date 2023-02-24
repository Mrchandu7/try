module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "DungUwU",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
    if (type == "tự rời") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`𝐒𝐨𝐑𝐫𝐲 ${name} 𝐁𝐚𝐛𝐲 𝐓𝐮𝐦 𝐊𝐨 𝐀𝐝𝐝 𝐧𝐢 𝐤𝐑 𝐩𝐚𝐘𝐚😢`, event.threadID)
            } else api.sendMessage(` 𝐌𝐞𝐑𝐲 𝐇𝐨𝐭𝐘 𝐡𝐮𝐘 ${name} 𝐁𝐚𝐛𝐘 𝐓𝐮𝐦 𝐋𝐞𝐟𝐭 𝐧𝐢 𝐤𝐫 𝐬𝐊𝐭𝐲😎🌿`, event.threadID);
        })
    }
}