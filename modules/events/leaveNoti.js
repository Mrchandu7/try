module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Notify bots or leavers",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "left the group" : "remove from the group";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `bye.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "𝐒𝐡𝐮𝐊𝐫 𝐇𝐚𝐢 𝐄𝐤 𝐓𝐡𝐚𝐫𝐤𝐢 𝐓𝐮 𝐊𝐦 𝐇𝐮𝐰𝐚😬🌿\n{name}\nReason: {type}." : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}