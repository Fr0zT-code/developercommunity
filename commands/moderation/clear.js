module.exports = {
    name: 'clear',
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: "<Amount to clear>",
    category: 'Moderation',
    description: 'Clears a specific amount of messages',
    permissions: ['MANAGE_MESSAGES'],
    callback: async ({ message, args }) => {
  
      if (isNaN(args[0])) return message.channel.send('Please specify a valid amount!');
  
      const amount = parseInt(args[0]);
  
      try {
        await message.channel.bulkDelete(await message.channel.messages.fetch({ limit: args[0] }));
      } catch (err) {
        console.log(err)
        return message.channel.send(`Could not delete ${amount} messages!`);
      }
      const successMessage = await message.channel.send(`Successfully cleared ${amount} messages!`);
    }
  }