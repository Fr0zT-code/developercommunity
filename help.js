const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

/*
Page 1 - Welcome
Page 2 - Commande
Page 3 - Information
*/
module.exports.run = async (bot, message, args) => {
    console.log(message)
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
}

module.exports.help = {
    name : 'embedpage'
    }