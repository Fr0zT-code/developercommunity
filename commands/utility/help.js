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
                    .setAuthor(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({format: "png", size: 1024, dynamic: true})}`)
                    .addFields(
                        { name: 'Thank you', value: 'Thank you for using the Dev Com bot, this means a lot to its developers' },
                        { name: 'Commands', value: 'To see commands, simply react accordingly' }
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
                    .setAuthor(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({format: "png", size: 1024, dynamic: true})}`)
                    .setThumbnail(icon)
                    .addFields(
                        { name: '!mute', value: 'Mutes a user', dynamic: true },
                        { name: '!unmute', value: 'Unmutes a user', dynamic: true }
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
                    .setAuthor(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({format: "png", size: 1024, dynamic: true})}`)
                    .addFields(
                        { name: '!add', value: 'Multiply two numbers', dynamic: true },
                        { name: '!meme', value: 'Shows a random meme from the meme subreddit', dynamic: true }
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
                .setAuthor(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({format: "png", size: 1024, dynamic: true})}`)
                .addFields(
                    { name: '!developer', value: 'Credits to developers of the bot', dynamic: true },
                    { name: '!embed', value: 'Makes it so you can embed some text', dynamic: true },
                    { name: '!help', value: 'Shows the current command', dynamic: true },
                    { name: '!ping', value: 'Shows the bots ping', dynamic: true },
                    { name: '!serverinfo', value: 'Shows the serverinfo', dynamic: true }
                )
                .setFooter('Page 4/4')
                    
            ,
            reactions: {
                '◀': 'previous'
            }
            },
        ])
        helpMenu.start()
    },
}







