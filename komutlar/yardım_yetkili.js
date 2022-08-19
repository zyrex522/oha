const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const Athenâx = new Discord.MessageEmbed()

  .setTitle('<a:yetkili:1009470064099065866> Wirax yetkili yardım menüsü. <a:kayt:1009473204387061881>') //başlığınız.

  .setColor('GREEN') // Embed Rengi

  .addField('!ban @etiket','Etiketlediğin kişiyi banlar.') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('!kick @etiket (sebep)','Etiketlediğiniz kişiyi kicklersiniz.')

  .addField('!sil (miktar)','Yazdığınız sayı kadar mesaj siler.')

  .addField('!saas aç/kapat','sa yazdığınızda bot size cevap verir.')

  .addField('!otorol @rol #kanal','Sunucuya katılan kişiye otomatik rol verir.')

  .addField('!otorolsıfırla','Otomatik rolü sıfırlar.')

  .addField('!otorolmesaj','Bot size gösterir') //Daha Fazla Komut Eklemek İçin .addField Satırlarını Çoğaltın

  .addField('!otorolmesajsıfırla','Otorol mesajını sıfırlar.')
 
  .addField('!küfürengel aç/kapat','Küfür engel sistemini açar.')

  .addField('!küfürlog #kanal','Küfür log.')

  .addField('!reklamengel aç/kapat','Reklam engel sistemini açarsınız. ')

  .addField('!reklamlog #kanal','Reklam log.')

  .setFooter('Wirax')

  message.channel.send(Athenâx)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['!yetkılı', 'yektili', 'tetkili', 'yetki'],

  permLevel: 0,

};

exports.help = {

  name: 'yetkili',

  usage: "!yetkili"

};