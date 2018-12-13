const Discord = require('discord.js');
var CronJob = require('cron').CronJob;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const client = new Discord.Client();

var userList = [];
var userDaily = [];
var userTotal = [];
var count = 0;

function getUsers(message) {
   message.reply("Getting guild members...");
   var curGuildMembers = client.guilds.get("436232448121241620"); //.members;
   message.reply("Finished getting...");
   message.reply(typeof curGuildMembers);

   for (let [snowflake, guildMember] of curGuildMembers.members) {
      console.log('snowflake: ' + snowflake);
      console.log('id: ' + guildMember.id);
      console.log('user id: ' + guildMember.user.id);
      userList.push(list[i].id);
      count++;
   }

   // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
   /*for (i = 0; i < curGuildMembers.length; i++) {
      //userList.push(list[i].id);
      //count++;
   }*/

}

client.on('ready', () => {
   //getUsers();
});

client.on('message', message => {
   if (message.content === "m ping") {
      getUsers(message);
      message.reply("Pong");
      message.reply(count);
      /*
      for (i = 0; i < userList.length; i++) {
         message.reply(userList[i]);
      }*/
   }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

