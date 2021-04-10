const  { MessageEmbed } = require('discord.js');
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
                ,
                reactions:{
                '▶': "next"
                }
                },
            {
                name: "otherPage",
                content: new MessageEmbed()
                .setTitle('Commands')
                .setFooter('Page 2/3')
                ,
                reactions:{  
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
                reactions:{  
                '◀': 'previous'
            }
            },
            ], 300000)
                helpMenu.start()
    },
}







