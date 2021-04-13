const { MessageEmbed } = require('discord.js')
const { snipe } = require('../../events/snipe')

module.exports = {
    commands: 'snipe',
    description: 'Snipes the recently deleted message',
    callback: (message, arguments, text) => {
        const msg = client.snipe.get(message.channel.id);
        if (!msg) return message.reply("There aren't any deleted msgs.")
        
        const embed = new MessageEmbed().setColor("RANDOM").setDescription(`${msg.content} was sent by ${msg.author.tag}.`);
        message.channel.send(embed)
    },
}

