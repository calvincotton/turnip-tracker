require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

console.log(process.env.TOKEN);

client.on('ready', () => {
  console.log('Tracking turnips...');
});

client.on('message', message => {
  if (message.content.slice(0, 4) === 'echo') {
    message.channel.send(message.content.slice(5).trim());
  }
});

client.login(process.env.TOKEN)
  .catch(error => {
    console.log(error);
  });
