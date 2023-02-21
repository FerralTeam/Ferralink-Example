const { EmbedBuilder } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
   name: "play",
   aliases: ["p"],
   run: async (client, message, args) => {
if (!message.member.voice.channel) return message.reply({content: "You Must Join A Voice Channel Before Using That Command!"});

if (message.guild.members.me.voice.channel && message.member.voice.channel.id !== message.guild.members.me.voice.channel.id)
return message.reply({content: "You must be in same voice channel to use this command!"});

const botPerms = message.member.voice.channel.permissionsFor(message.client.user);
if (!botPerms.has(Discord.PermissionFlagsBits.Connect) || !botPerms.has(Discord.PermissionFlagsBits.Speak) || !botPerms.has(Discord.PermissionFlagsBits.ViewChannel))
return message.reply({content: "I Don't have permission to connect the voice channel"});

if (!args.join(" ")) return message.reply({content: "You need provide an song name to play!"});

const player = await client.manager.createPlayer({
guildId: message.guild.id,
voiceId: message.member.voice.channel.id,
textId: message.channel.id,
shardId: message.guild.shardId,
volume: 100,
deaf: true,
});

const resolve = await player.search(args.join(" "));
const { loadType, tracks, playlistInfo } = resolve;

if (loadType === "NO_MATCHES" || !tracks.length) return message.reply({content: "No match songs result found!"});

if (loadType === 'PLAYLIST_LOADED') {
for (const track of tracks) {
track.info.requester = message.author;
player.queue.add(track);
}
if (!player.playing && !player.paused) await player.play();
const embed1 = new EmbedBuilder()
.setColor("Random")
.setDescription(`Added **${playlistInfo.name}** to queue.`)
return message.channel.send({embeds: [embed1]});
} else if (loadType === 'SEARCH_RESULT' || loadType === 'TRACK_LOADED') {
tracks[0].info.requester = message.author;
player.queue.add(tracks[0]);                             
if (!player.playing && !player.paused) await player.play();
const embed2 = new EmbedBuilder()
.setColor("Random")
.setDescription(`Queued [${tracks[0].info.title}](${tracks[0].info.uri})`)
return message.channel.send({embeds: [embed2]});
}
   }
}
