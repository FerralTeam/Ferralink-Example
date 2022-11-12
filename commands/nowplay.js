const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: "nowplay",
    aliases: ["np"],
    run: async (client, message, args) => {
if (!message.member.voice.channel) return message.reply({content: "You Must Join A Voice Channel Before Using That Command!"});
 
if (message.guild.members.me.voice.channel && message.member.voice.channel.id !== message.guild.members.me.voice.channel.id)
return message.reply({content: "You must be in same voice channel to use this command!"});

const player = client.manager.players.get(message.guild.id);
if (!player) return message.reply({content: "Nothing playing right now."});

const embed = new EmbedBuilder()
.setTitle("Now Playing")
.setColor("Random")
.setDescription(`[${player.queue.current.info.title}](${player.queue.current.info.uri}) By **${player.queue.current.info.author}**.`)
.setFooter({text: `Requested By ${player.queue.current.info.requester.tag}`});
return message.reply({embeds: [embed]})
    }
} 
