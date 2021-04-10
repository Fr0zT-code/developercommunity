const { MessageEmbed, Discord, Message} = require('discord.js')

module.exports = {
    commands: 'mute',
    description: 'Mutes a user',
    expectedArgs: '<usermention> <duration>',
    permissionError: 'You do not have permission to use this command',
    minArgs: 1,
    maxArgs: 90,
    callback: (message, arguments, text) => {
        const target = message.mentions.users.first();
            if (target) {
     
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member', 'Owner', 'Admin', 'MH Staff', 'Sr. Developer', 'Developer', 'Jr. Developer', 'Bot Developer', 'Server Owner', 'Minecraft Skript', 'Java', 'JavaScript', 'Python', 'C');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
     
                let memberTarget = message.guild.members.cache.get(target.id);
     
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
     
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('**Invalid User**');
            }
        

    },

    permissions: ['MANAGE_MESSAGES'],

}