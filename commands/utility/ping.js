const { MessageEmbed } = require('discord.js')


module.exports = {
    commands: 'ping',
	description: 'Shows the bot\'s ping',
    callback: (message, Discord) => {
        const pingEmbed = new MessageEmbed()
		.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({format:"png", dynamic:true}))
		.addFields(
			{ name: 'API', value: `${message.client.ws.ping}`},
			{ name: 'Bot Latency', value: `${Date.now() - message.createdTimestamp}`}
		)
		.setFooter(`New? Do !help`, 'https://cdn.discordapp.com/attachments/827483229212377088/828920648939733042/8633-pepe-hack.gif')
		.setColor('RANDOM')
        

		message.channel.send(pingEmbed);
    },
}