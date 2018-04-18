const Discord = require('discord.js');
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

if (!DISCORD_TOKEN) {
  throw 'DISCORD_TOKEN environment variable is not set.'
}

const bot = new Discord.Client();

function diceRoll(diceStr) {
  const [times, dice] = diceStr[1].split("d").map(d => parseInt(d));
  const rolls = Array(times).fill(null).map(_ => Math.floor(dice*Math.random() + 1));
  return `Rolls: ${rolls.sort().join(" ")}\nSum: ${rolls.reduce((acc, n) => acc + n, 0)}`;
}

bot.on('message', (message) => {
  if (message.content[0] === '!') {
    const messageContent = message.content.slice(1).toLowerCase();
    const splitContent = messageContent.split(" ");
    if (messageContent === 'handbook') {
      message.channel.sendMessage('https://drive.google.com/file/d/0B3E_3y6MPuYjQ3cteEtLQm53a1U/view');
    } else if (messageContent === 'help') {
      message.channel.sendMessage('DnD Bot responds to the following commands: ');
      message.channel.sendMessage('*!handbook*');
      message.channel.sendMessage('*!roll (insert dice and rolls here)*');
    } else if (splitContent[0] === 'roll') {
      message.channel.sendMessage(diceRoll(splitContent[1]));
    } else {
      message.channel.sendMessage(`*${messageContent}* is not a valid command. Use !help to view commands.`);
    }
  }
});

bot.login(DISCORD_TOKEN);
