const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: '8ball',
    description: 'Tells you answers to your fate!',
    expectedArgs: '<question>',
    minArgs: 2,
    maxArgs: 90,
    callback: (message, argsuments, text) => {
        let responses = [
            "Yes",
            "No",
            "Definitely",
            "Absolutely",
            "Not in a billion years",
            "Don't count on it",
            "As I see it, yes.",
            "It is certain.",
            "My sources say no.",
            "Very doubtful",
            "Without a doubt",
          ]
          const response = responses[Math.floor(Math.random()*(responses.length))]
          const embed = new MessageEmbed().setColor("RANDOM").setDescription(`\n${response}`);
          message.channel.send(embed)
    },
}