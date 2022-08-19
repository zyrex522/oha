const Discord = require('discord.js')

    exports.run = (client, message, args) => {
       if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(` Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!`);

        let kullanici = message.mentions.members.first();
        let sebep = args.slice(1).join(' ');

        if(!kullanici){
            const kullanicihata = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Kicklenecek kişiyi etiketlemen gerekiyor.**`)
            .setColor('#ff0000')
            return message.channel.send(kullanicihata)
        }
        if(!sebep){
            const sebephata = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Lütfen sebep belirt.**`)
            .setColor('#ff0000')
            return message.channel.send(sebephata)
        }

        if(kullanici && sebep){
            kullanici.kick()

            const kick =  new Discord.MessageEmbed()
            .setDescription(`${kullanici} Kullanıcısı ${message.author} Tarafından **${sebep}** Sebebiyle Sunucudan Kicklendi, Umarım Aynı Davranışları Tekrar Yapmaz.`)
            .setAuthor(`${message.author.username} - Başarılı Kick`, message.author.avatarURL({dynamic: true}))
            .setColor('RANDOM');
            message.channel.send(kick)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['KİCK','Kick','at','At'],
    permLevel: 0
}

exports.help = {
    name: 'kick'
}