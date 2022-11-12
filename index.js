const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require("discord.js");
const { FerraLink } = require("ferra-link");
const config = require("./config.js");
const fs = require("fs");

const client = new Client({intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.MessageContent
]});

client.commands = new Collection();

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith("js"));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], (...args) => event(client, ...args));
}

const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith("js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
};

//ferralink
client.manager = new FerraLink(client, config.nodes, config.shoukakuOptions, {
 spotify: {
  clientID: config.spotify.clientID,
  clientSecret: config.spotify.clientSecret
 }
});

const ferralink = client.manager;
ferralink.shoukaku.on("ready", (name) => {
console.log(`Node ${name} connected`);
});
ferralink.on("trackStart", (player, track) => {
const channel = client.channels.cache.get(player.textId);
const embed = new EmbedBuilder()
.setTitle("🎶 Now Playing")
.setColor("Random")
.setDescription(`[${track.info.title}](${track.info.uri})`);
channel.send({embeds: [embed]});
});
ferralink.on("queueEnd", (player) => {
const channel = client.channels.cache.get(player.textId);
const embed = new EmbedBuilder()
.setColor("Red")
.setDescription("Queue has ended.");
channel.send({embeds: [embed]});
return player.destroy();
});

process.on("unhandledRejection", (reason, promise) => {
  try {
      console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
  } catch {
      console.error(reason);
    }
});

client.login(config.token);
