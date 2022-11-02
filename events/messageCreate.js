const { EmbedBuilder } = require("discord.js");
const config = require("../config.js");

module.exports = async(client, message) => {
if (message.author.bot || !message.guild || message.channel.type === "dm") return;

let prefix = config.prefix;
if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
const embed = new EmbedBuilder()
.setColor("Random")
.setDescription(`My prefix here is \`${prefix}\``)
return message.reply({embeds: [embed]}).catch(err => { });
}
if (message.content.indexOf(prefix)!== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmda = args.shift().toLowerCase();
let command = client.commands.get(cmda) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmda));
if (!command) return;
try {
command.run(client, message, args);
} catch (error) {
  console.error(error);
  }
}