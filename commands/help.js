const { EmbedBuilder } = require("discord.js");
module.exports = {
   name: "help",
   aliases: ["h"],
   run: async (client, message, args) => {

const embed = new EmbedBuilder()
.setColor("Random")
.setAuthor({ name: 'Commands', iconURL: client.user.displayAvatarURL(),  url: 'https://discord.gg/8n3yNqtPAE' })
.addFields({
name: 'Music', value: '\`play\`, \`stop\`, \`skip\`, \`volume\`, \`resume\`, \`pause\`'
});
return message.channel.send({embeds: [embed]});
    }
} 
