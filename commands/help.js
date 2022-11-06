const { EmbedBuilder } = require("discord.js");
module.exports = {
   name: "help",
   aliases: ["h"],
   run: async (client, message, args) => {
const embed = new EmbedBuilder()
.setAuthor({name: 'Commands', iconURL: client.user.displayAvatarURL()})
.setColor('Random')
.addFields({
name: 'Music',
value: '\`play\`, \`stop\`, \`skip\`, \`volume\`, \`resume\`, \`pause\`'
});
return message.channel.send({embeds: [embed]});
    }
} 
