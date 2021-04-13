const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'bruh',
    description: 'This is a bruh command',
    callback: (message, arguments, text) => {
        const embed = new MessageEmbed().setColor("RANDOM").setDescription(`moment`);
        message.channel.send(embed)
    },
}


