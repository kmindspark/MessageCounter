const Discord = require('discord.js');
var CronJob = require('cron').CronJob;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const client = new Discord.Client();

var userList = [];
var userDaily = [];
var userTotal = [];

function getUsers() {
   const list = client.guilds.get("436232448121241622");

   // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
   for (i = 0; i < list.length; i++) {
      userList.push(list[i].id);
   }
}

client.on('ready', () => {
   getUsers();
});

client.on('message', message => {
   if (message.content === "m ping") {
      message.reply("Pong.");

      for (i = 0; i < userList.length; i++) {
         message.reply(userList[i]);
      }
   }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

