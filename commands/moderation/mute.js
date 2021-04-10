const { MessageEmbed, Discord} = require('discord.js')
const ms = require('ms');

module.exports = {
    commands: 'mute',
    description: 'Mutes a user',
    expectedArgs: '<usermention> <duration>',
    permissionError: 'You do not have permission to use this command',
    minArgs: 1,
    maxArgs: 90,
    callback: (message, arguments) => {
        const target = message.mentions.users.first();

     
                let mainRoles = message.guild.roles.cache.find(roles => roles.name === 'Member', 'Owner', 'Admin', 'MH Staff', 'Sr. Developer', 'Developer', 'Jr. Developer', 'Bot Developer', 'Server Owner', 'Minecraft Skript', 'Java', 'JavaScript', 'Python', 'C');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
     
                let memberTarget = message.guild.members.cache.get(target.id);
     
                if (!arguments[1]) {
                    memberTarget.roles.remove(mainRoles.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRoles.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(arguments[1]))}`);
     
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRoles.id);
                }, ms(arguments[1]));
            
        

    },

    permissions: ['MANAGE_MESSAGES'],

}