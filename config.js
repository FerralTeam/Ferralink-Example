module.exports = {
    prefix: "Your bot prefix",
    token: "Your bot token",
    nodes: [{
      name: "lavalink",
      url: "localhost:2333",
      auth: "youshallpass",
      secure: false
    }],
    Options: {
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
