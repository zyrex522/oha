const discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const icindekiler = require(`../şablonlar.json`)
    const icindeki = icindekiler[Math.floor(Math.random() * icindekiler.length)];

   message.channel.send(new MessageEmbed()
                       .setTitle("Şablon :tada:")
  .setDescription(`${icindeki}`)
   )
    

  
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'şablon',
}