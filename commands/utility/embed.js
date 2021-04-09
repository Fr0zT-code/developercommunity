const { MessageEmbed } = require('discord.js')


module.exports = {
    commands: 'embed',
    description: 'Can send embeds in different channels',
    expectedArgs: '<channel> <hexcolor> <text>',
    permissionError: 'You do not have permission to run this command',
    minArgs: 3,
    maxArgs: 3,
    callback: (message, args, text) => {
        const channel = message.mentions.channels.first()
        const color = args.slice(1)
        const title = args.slice(2).join(" "); 
        
        const embed = new MessageEmbed()
        .setTitle(title)
        .setColor('#' + color)
        channel.send(embed);
    },
    requiredRoles: ['Developer'],
}

