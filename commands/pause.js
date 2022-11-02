module.exports = {
    name: "pause",
    aliases: [],
    run: async (client, message, args) => {
if (!message.member.voice.channel) return message.reply({content: "You Must Join A Voice Channel Before Using That Command!"});
 
if (message.guild.members.me.voice.channel && message.member.voice.channel.id !== message.guild.members.me.voice.channel.id)
return message.reply({content: "You must be in same voice channel to use this command!"});

const player = client.manager.players.get(message.guild.id);
if (!player) return message.reply({content: "Nothing playing right now."});
if (player.paused) return message.reply({content: "Player is already paused!"});

player.pause(true);
return message.reply({content: "⏸️ Paused the playing player."})
    }
} 