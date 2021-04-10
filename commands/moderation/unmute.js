const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'unmute',
    description: 'Umutes a user',
    expectedArgs: '<usermention>',
    permissionError: 'You dont have permission to use this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const target = message.mentions.users.first();
        let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
    },
    permissions: ['MANAGE_MESSAGES'],
}