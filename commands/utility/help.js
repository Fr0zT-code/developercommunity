const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

module.exports = {
    commands: ['help', 'h'],
    description: 'Help command!',
    callback: (message, arguments, text) => {
        const icon = message.guild.iconURL()
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed()
                    .setTitle('Basic info')
                    .setThumbnail(icon)
                    .setFooter('Page 1/4')
                    .setAuthor(`Requested by ${message.author.tag}`, message.author.icon)
                    .addFields(
                        { name: 'Thank you', value: 'Thank you for using the Dev Com bot, this means a lot to its developers' }
                    )
                ,
                reactions: {

                    '▶': "next"
                }
            },
            {
                name: "moderationCommands",
                content: new MessageEmbed()
                    .setTitle('🤖 - Moderation Commands')
                    .setAuthor(`Requested by ${message.author.tag}`, message.author.icon)
                    .setThumbnail(icon)
                    .addFields(

                        { name: 'Moderation commands', value: 'Moderation commands will be displayed underneath' },
                        { name: '!mute', value: 'Mutes a user' },
                        { name: '!unmute', value: 'Unmutes a user' }
                    )
                    .setFooter('Page 2/4')
                ,
                reactions: {
                    '◀': 'previous',
                    '▶': "next"
                }
            },
            {
                name: "funCommands",
                content: new MessageEmbed()
                    .setTitle('😂 - Fun Commands')
                    .setThumbnail(icon)
                    .setAuthor(`Requested by ${message.author.tag}`, message.author.icon)
                    .addFields(
                        { name: '!add', value: 'Multiply two numbers' },
                        { name: '!meme', value: 'Shows a random meme from the meme subreddit' }
                    )
                    .setFooter('Page 3/4')
                ,
                reactions: {
                    '◀': 'previous',
                    '▶': "next"
                }
            },
            {
                name: "utilityCommands",
                content: new MessageEmbed()
                .setTitle('🐱‍👤 - Utility Commands')
                .setThumbnail(icon)
                .setAuthor(`Requested by ${message.author.tag}`, message.author.icon)
                .addFields(
                    { name: '!developer', value: 'Credits to developers of the bot' },
                    { name: '!embed', value: 'Makes it so you can embed some text' },
                    { name: '!help', value: 'Shows the current command' },
                    { name: '!ping', value: 'Shows the bots ping' },
                    { name: '!serverinfo', value: 'Shows the serverinfo' }
                )
                .setFooter('Page 4/4')
                    
            ,
            reactions: {
                '◀': 'previous'
            }
            },
        ], 300000)
        helpMenu.start()
    },
}







