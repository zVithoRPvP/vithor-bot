const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NDQyMzI3NDQ4MDMwNDEyODEx.Dc98YA.gfyzRdZCuG5KgfOZlcougWZxiWg');

bot.on('ready', () => {

    bot.user.setActivity("<help", {type: "PLAYING"});
    bot.user.setStatus('dnd');
    console.log('Bot rodando, informações:');
    console.log('VithorBOT: ' + bot.user.username )
    console.log( '442327448030412811: ' + bot.user.id)
})

bot.on('message', message => {
    if(message.content.startsWith('!ping')){
        message.channel.send('Pong!')
        if(message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )     return message.reply("você não tem o cargo!")
    }
})



