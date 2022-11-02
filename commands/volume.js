module.exports = {
    name: "volume",
    aliases: ["volume"],
    run: async (client, message, args) => {
if (!message.member.voice.channel) return message.reply({content: "You Must Join A Voice Channel Before Using That Command!"});
 
if (message.guild.members.me.voice.channel && message.member.voice.channel.id !== message.guild.members.me.voice.channel.id)
return message.reply({content: "You must be in same voice channel to use this command!"});

const player = client.manager.players.get(message.guild.id);
if (!player) return message.reply({content: "Nothing playing right now."});
if (isNaN(args[0])) return message.reply("Volume must be a number.");

player.setVolume(args[0]);
return message.reply({content: `Volume has been set to \`${args[0]}%\`.`})
    }
} 