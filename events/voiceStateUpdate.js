module.exports = async(client, oldState, newState) => {
if (!oldState.channelId) return;
let player = client.manager.players.get(newState.guild.id);
if (oldState && newState && oldState.channelId !== newState.channelId && player && oldState.id === client.user.id) {
if (oldState.channelId === player.voiceId) {
player.destroy();
    }
  }
}
