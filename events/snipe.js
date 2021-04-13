module.exports = (client) => {
    client.on("messageDelete", message => {
      const { author, attachments, content } = message;
      if (!content || author === client.user) return;
  
      client.snipe.set(message.channel.id, {
        content: content,
        image: attachments.first() ? attachments.first().proxyURL : null,
        author: author
      });
    })
  }