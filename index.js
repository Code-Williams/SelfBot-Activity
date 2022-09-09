const Discord = require("discord.js-selfbot-v13")
const client = new Discord.Client()
const config = require("./config.json")
const tInfo = require("./twitchInfo.json")

client.on("ready", () => {
    console.log("Bot is now ready to use")

    client.user.setActivity(tInfo.text, {
        type : "STREAMING",
        url : tInfo.url 
    })
})

client.login(config.token)
