const { ActivityType } = require("discord.js");
const config = require("../config.js");
module.exports = async(client) => {
try{
console.log(`${client.user.tag} ready`);
setInterval(() => {client.user.setActivity(`${config.prefix}help`, {type: ActivityType.Listening})}, 60000);
} catch (error) {
console.error(error);}
};