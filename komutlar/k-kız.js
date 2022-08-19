const discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kkanal_${message.guild.id}`)
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
let kızrol = db.fetch(`kızr_${message.guild.id}`)
let yetkili = db.fetch(`yetkilir_${message.guild.id}`)
let sohbet = db.fetch(`skanal_${message.guild.id}`)
let tag = db.fetch(`tag_${message.guild.id}`)



 
if(!message.member.roles.cache.has(yetkili)) if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanmak İçin Gerekli Yetkiniz Yok!**`)
if(message.channel.id !== kanal) return message.channel.send(`** Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!**`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Bir Kişi Belirt!**`)
let isim = args[1]
if (!isim) return message.channel.send(`**Bir İsim Belirt!**`)
let yaş = args[2]
if (!yaş) return message.channel.send(`**Bir Yaş Belirt!**`)
if(isim) member.setNickname(`${tag ? tag: ''} ${isim} | ${yaş}`);
member.roles.remove(kayıtsız)
member.roles.add(kızrol)
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

db.add(`kız+_${message.author.id}`, 1)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kız kayıt!`)
.setColor(0x36393F)
.setDescription(` Kız olarak kayıt edilen kullanıcı:${member} \n Kız olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.addField(`Kullanıcının yaşı:`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Wirax`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
client.channels.cache.get(kanal).send(`@everyone | ${member.user} **Aramıza katıldı. <a:e_:1008831243254763650>** `);
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
}