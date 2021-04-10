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
                    .setTitle('Welcome')
                    .setFooter('Page 1/3')
                    .addFields(
                        { name: 'Thank you', value: 'Thank you for using the Dev Com bot, this means a lot to its developers' },
                        { name: 'Commands', value: 'You can find the commands page by reacting with ▶' }
                    )
                ,
                reactions: {
                    '▶': "next"
                }
            },
            {
                name: "otherPage",
                content: new MessageEmbed()
                    .setTitle('Commands')
                    .addFields(
                        { name: 'Fun commands', value: 'Fun commands will be displayed underneath' },
                        { name: '!add', value: 'Multiply two numbers' },
                        { name: '!avatar', value: 'Shows the tagged users avatar. If you dont tag a user it will show yours' },
                        { name: '!meme', value: 'Shows a random meme from the meme subreddit' },
                        { name: 'Moderation commands', value: 'Moderation commands will be displayed underneath' },
                        { name: '!mute', value: 'Mutes a user' },
                        { name: '!unmute', value: 'Unmutes a user' },
                        { name: 'Utility commands', value: 'Utility commands will be displayed underneath' },
                        { name: '!developer', value: 'Gives credits to who developed the bot' },
                        { name: '!embed', value: 'Makes it so you can embed some text' },
                        { name: '!help', value: 'Shows the current command' },
                        { name: '!ping', value: 'Shows the bots ping' },
                        { name: '!serverinfo', value: 'Shows the serverinfo' }
                    )
                    .setFooter('Page 2/3')
                ,
                reactions: {
                    '◀': 'previous',
                    '▶': "next"
                }
            },
            {
                name: "otherPage",
                content: new MessageEmbed()
                    .setTitle('Information')
                    .setFooter('Page 3/3')
                ,
                reactions: {
                    '◀': 'previous'
                }
            },
        ], 300000)
        helpMenu.start()
    },
}







