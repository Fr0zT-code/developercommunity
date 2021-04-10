const { MessageEmbed, Discord, Message} = require('discord.js')

module.exports = {
    commands: 'mute',
    description: 'Mutes a user',
    expectedArgs: '<usermention> <duration>',
    permissionError: 'You do not have permission to use this command',
    minArgs: 1,
    maxArgs: 90,
    callback: (message, arguments, text) => {
        const target = message.mentions.users.first()
        let mainRole = message.guild.roles.chache.find(role => role.name === 'Member')
        let muteRole = message.guild.roles.chache.find(role => role.name === 'Muted')

        let memberTarget = message.guild.members.cache.get(target.id)

        memberTarget.roles.remove(mainRole.id)
        memberTarget.roles.add(muteRole.id)
        const icon = message.guild.iconURL()
        const embed = new MessageEmbed()
        .setTitle('User muted')
        .setThumbnail(icon)
        .addField(`Moderator`, `${message.author}`)
        .addField('Victim', `${target}`)
        .setTimestamp()
        .setColor('RED')
        .setAuthor(`${message.guild.name}`, icon)
        message.channel.send(embed)
        

    },

}