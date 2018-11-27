const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Anime", {type: "WATCHING"})

})

client.login(process.env.BOT_TOKEN);
