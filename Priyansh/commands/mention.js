module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100066401546757") {
    var aid = ["100066401546757"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝐃𝐨𝐨𝐑 𝐇𝐚𝐚𝐓 𝐉𝐚𝐨 𝐌𝐞𝐑𝐞 𝐁𝐨𝐬𝐒 𝐒𝐞 𝐊𝐲𝐔 𝐁𝐨𝐋𝐚 𝐑𝐞𝐇 𝐇𝐨 𝐔𝐧𝐊𝐨 🤨" , "𝐖𝐨 𝐁𝐮𝐒𝐲 𝐇 𝐌𝐮𝐣𝐇𝐞 𝐁𝐨𝐋𝐨 𝐊𝐲𝐀 𝐁𝐨𝐥𝐍𝐚 𝐇?🤨", "𝐊𝐲𝐀 𝐇𝐮𝐚 𝐁𝐨𝐬𝐒 𝐊𝐨 𝐐 𝐁𝐨𝐋𝐚 𝐑𝐞𝐡 𝐇𝐨?🤨", "𝐖𝐨 𝐒𝐡𝐘𝐚𝐃 𝐁𝐮𝐒𝐲 𝐇𝐨𝐆𝐞🤨", "𝐁𝐨 𝐁𝐮𝐒𝐲 𝐇𝐚𝐢 𝐀𝐛𝐇𝐢 𝐀𝐩𝐍𝐞 𝐖𝐨𝐑𝐤 𝐌𝐚𝐢 𝐌𝐮𝐣𝐇𝐞 𝐁𝐨𝐋 𝐃𝐨 𝐌𝐚𝐢 𝐁𝐨𝐋 𝐃𝐮𝐧𝐆𝐚 𝐁𝐨𝐬𝐒 𝐊𝐨 🤨"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }