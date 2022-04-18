var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("📚 - Help panel")
    
     .setThumbnail(bot.user.displayAvatarURL())   
      

    .setDescription (`My Prefix In This Server is <a:Fleha:866364180948844554> \`${prefix}\``)
    


    .addField(`ㅤ`, ":crown:  `|` moderation")

    .addField(`ㅤ`, ":gear:   `|` manage")

    .addField(`ㅤ`, ":flower_playing_cards:   `|` fun")
  
    .addField(`ㅤ`, ":comet:   `|` games")

    .addField(`ㅤ`, ":coin:   `|` economy")
    
    .addField(`ㅤ`, ":underage:   `|` nsfw")

    .addField(`ㅤ`, ":wrench:   `|` utility")

    .addField(`ㅤ`, ":sunrise_over_mountains:   `|` image")

    .addField(`ㅤ`, ":book:   `|` textsystem") 

    .addField(`ㅤ`, ":no_entry_sign:   `|` misc")

    .addField(`ㅤ`, ":information_source:   `|`  info")
   
    .setImage("https://images-ext-1.discordapp.net/external/haHFMXVQB5O-C5sQByggAOuV9UFPilRxwcxgNKV1EaU/https/media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")

    
    

message.channel.send(log);
}
}
  }

 
