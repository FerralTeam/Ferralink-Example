module.exports = async(client, oS, nS) => {
if (!oS.channelId) return;
let player = client.manager.players.get(nS.guild.id);
if (oS && nS && oS.channelId !== nS.channelId && player && oS.id === client.user.id) {
if (oS.channelId === player.voiceId) {
player.destroy();
    }
  }
}
