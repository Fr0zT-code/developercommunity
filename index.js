const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const mongo = require('./mongo');
const loadCommands = require('./commands/load-commands')
process.setMaxListeners()


client.on('ready', async () => {
    console.log(`Ready! Logged in as ${client.user.tag}`)
    client.user.setActivity('YouTube', { type: 'WATCHING' }).catch(console.error);
    loadCommands(client)

    await mongo().then(mongoose => {
        try {
            console.log('Connected to mongo')
        } finally {
            mongoose.connection.close()
        }
    })


})

client.on('guildMemberAdd', guildMember => {
//    let welcomeRole = guildMember.guild.roles.cache.find(r => r.name === 'Member');
//    let separationRole = guildMember.guild.roles.cache.find(r => r.id === '808034190053605376');
 
//    guildMember.roles.add(welcomeRole);
//    guildMember.roles.add(separationRole);
    const guild = client.guilds.cache.get("829903223162798091");
        const embed = new Discord.MessageEmbed()
            .setColor('#103760')
            .setDescription(`Hey <@${guildMember.user.id}>, welcome to the server!\nBe sure to check out <#829905136783982592> on how to become a dev`)
            .setTitle('Welcome to Developer Community')
            .setFooter(`Developer Community - You are our #${guild.memberCount} member!`,guildMember.user.displayAvatarURL({format:"png", size:1024, dynamic:true}))
            .setTimestamp();
            guildMember.guild.channels.cache.get('829906274111848468').send(embed);
});







client.login(process.env.token)