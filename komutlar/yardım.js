const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const Athenâx = new Discord.MessageEmbed()

  .setTitle('<a:yetkili:1009470064099065866> Wirax Yardım Menüsü <a:kayt:1009473204387061881>') //başlığınız.

  .setColor('BLACK') // Embed Rengi

  .addField('!erkekrol @etiket','Erkek rolünü ayarlarsınız.') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('!kızrol @etiket','Kız rolünü ayarlarsınız.')

  .addField('!yetkilirol @etiket','Yetkili rolünü ayarlarsınız')

  .addField('!kayıtsızrol @etiket','Kayıtsız rolünü ayarlarsınız.')

  .addField('!girişkanal #kanal','Kişi sunucuya girdiğinde hangi kanalda gözükdüğünü ayarlarsınız.')

  .addField('!kayıtkanal #kanal','Kayıt yapıcal kanalı ayarlarsınız.')

  .addField('!sohbet kanal #kanal','Kişinin kayıdı tamamlandığında hangi kanalda gözükdüğünü ayarlarsınız.') //Daha Fazla Komut Eklemek İçin .addField Satırlarını Çoğaltın

  .addField('!kayıtsıfırla','Kayıt sistemini tamamen sıfırlar.')

  .addField('!yetkili','Yetkili menüsünü açar.')

  .setFooter('Wirax')

  message.channel.send(Athenâx)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['help', 'YARDIM', 'HELP', 'HELPS'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım',

  usage: "!yardım"

};

