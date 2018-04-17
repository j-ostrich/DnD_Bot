const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

  function DiceRoll(string) {
    let times = parseInt(string.slice(0,1))
    let dice = parseInt(string.slice(2))
    for (let i = 0; i < times; i++) {
      message.channel.sendMessage(Math.floor(Math.random() * dice) + 1)
    }
  }

  if (message.content[0] == '!') {
    message.content = message.content.slice(1)
    if (message.content == 'handbook') {
      message.channel.sendMessage('https://drive.google.com/file/d/0B3E_3y6MPuYjQ3cteEtLQm53a1U/view');
    } else if (message.content == 'help') {
      message.channel.sendMessage('DnD Bot responds to the following commands: ')
      message.channel.sendMessage('*!handbook*')
      message.channel.sendMessage('*!roll (insert dice and rolls here)*')
    } else if (message.content.split(" ")[0] == 'roll') {
      let dice = message.content.split(" ")[1]
      DiceRoll(dice)
    }
  }
});

bot.login('TOKEN GOES HERE')
