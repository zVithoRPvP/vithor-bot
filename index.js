const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.token);

bot.on('ready', () => {

    bot.user.setActivity("<help", {type: "PLAYING"});
    bot.user.setStatus('dnd');
    console.log('Bot rodando, informações:');
    console.log('VithorBOT: ' + bot.user.username )
    console.log( '442327448030412811: ' + bot.user.id)
})

bot.on('message', message => {
    if(message.content.startsWith('!ping')){
        message.channel.send('Pong!');
       
    }
})



