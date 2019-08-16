const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612054535657095211")
setInterval(function() {
channel.send(`hacker gg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);