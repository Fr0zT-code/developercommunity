const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

module.exports = {
    commands: ['help', 'h'],
    description: 'Help command!',
    callback: (message, arguments, text) => {
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed()
                    .setTitle('Basic info')
                    .setFooter('Page 1/4')
                    .addFields(
                        { name: 'Thank you', value: 'Thank you for using the Dev Com bot, this means a lot to its developers' },
                        { name: '🤖 - Moderation Commands', value: '' },
                        { name: '😃 - Fun commands', value: '' },
                        { name: '🐱‍👤 - Utility commands', value: '' }
                    )
                ,
                reactions: {
                    '🤖': "moderationCommands",
                    '😃': "funCommands",
                    '🐱‍👤': "utilityCommands"
                }
            },
            {
                name: "moderationCommands",
                content: new MessageEmbed()
                    .setTitle('Moderation Commands')
                    .addFields(

                        { name: 'Moderation commands', value: 'Moderation commands will be displayed underneath' },
                        { name: '!mute', value: 'Mutes a user' },
                        { name: '!unmute', value: 'Unmutes a user' }
                    )
                    .setFooter('Page 2/4')
                ,
                reactions: {
                    '◀': 'main',
                    '😃': "funCommands",
                    '🐱‍👤': "utilityCommands"
                }
            },
            {
                name: "funCommands",
                content: new MessageEmbed()
                    .setTitle('Fun Commands')
                    .addFields(
                        { name: '!add', value: 'Multiply two numbers' },
                        { name: '!meme', value: 'Shows a random meme from the meme subreddit' }
                    )
                    .setFooter('Page 3/4')
                ,
                reactions: {
                    '◀': 'main',
                    '🤖': "moderationCommands",
                    '🐱‍👤': "utilityCommands"
                }
            },
            {
                name: "utilityCommands",
                content: new MessageEmbed()
                .setTitle('Utility Commands')
                .addFields(
                    { name: '!developer', value: 'Credits to developers of the bot' },
                    { name: '!embed', value: 'Makes it so you can embed some text' },
                    { name: '!help', value: 'Shows the current command' },
                    { name: '!ping', value: 'Shows the bots ping' },
                    { name: '!serverinfo', value: 'Shows the serverinfo' }
                )
                .setFooter('Page 4/4')
                
            },
        ], 300000)
        helpMenu.start()
    },
}







