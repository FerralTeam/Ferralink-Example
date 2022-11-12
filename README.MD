# 🎶 [FerraLink](https://discord.gg/8n3yNqtPAE)

A Music Bot Example Template Based On [FerraLink](https://www.npmjs.com/package/ferra-link) Lavalink Client.

# 😇 Features
- Good sound quality.
- Support - spotify, soundcloud, youtube.
- Easy to setup and use.
- Made with latest discord.js version.

# 📋 Configration
- Enter options details in `config.js` file.
```js
module.exports = {
    prefix: "Your bot prefix",
    token: "Your bot token",
    nodes: [{
      name: "lavalink",
      url: "localhost:2333",
      auth: "youshallpass",
      secure: false
    }],
    shoukakuOptions: {
     moveOnDisconnect: false, 
     resumable: false, 
     resumableTimeout: 60, 
     reconnectTries: 10, 
     restTimeout: 60000
    },
    spotify: {
        clientID: "Your spotify clientID",
        clientSecret: "Your spotify clientSecret"
    }
}
```
# 💬 Need help
- [Documents](https://ferralink.gitbook.io/untitled/).
- [Support Server](https://discord.gg/8n3yNqtPAE).
