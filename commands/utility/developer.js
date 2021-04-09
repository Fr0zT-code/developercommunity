const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['developer', 'dev'],
    description: 'Credits to the developer(s)',
    callback: (message, arguments, text) => {
        const embed = new MessageEmbed()
        .setTitle('Developer')
        .setDescription('>>> The developer of this project is <@765767707621589032>!\nAsk him anything you need help with!\n**__Spamming__ - Block & Banned From Using The Bot!**\nBe careful of your actions!')
        .setColor('RANDOM')
        .setFooter(`Executed By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

message.channel.send(embed);
    },
}





