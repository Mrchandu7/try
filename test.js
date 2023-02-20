module.exports.config = {
  name: "",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "dell biết",
  description: "chịu",
  commandCategory: "cặc lỏ",
  cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apiquyenkaneki.tk/api/gaisexy.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
      api.sendMessage({
        body: `Sai lệnh rồi nha`,
        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
  })
}