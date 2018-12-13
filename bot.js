const Discord = require('discord.js');
var CronJob = require('cron').CronJob;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const client = new Discord.Client();

var userList = [];
var userDaily = [];
var userTotal = [];
var count = 0;

function getUsers() {
   var curGuildMembers = client.guilds.get("436232448121241620");

   for (let [snowflake, guildMember] of curGuildMembers.members) {
      console.log('snowflake: ' + snowflake);
      console.log('id: ' + guildMember.id);
      console.log('user id: ' + guildMember.user.id);
      userList.push(guildMember.user.id);
      userDaily.push(0);
      userTotal.push(0);
      count++;
   }

   // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
   /*for (i = 0; i < curGuildMembers.length; i++) {
      //userList.push(list[i].id);
      //count++;
   }*/
}

function getRankings(cumulative) {
   var curList = userList.slice();
   var curDaily = userDaily.slice();
   if (cumulative) {
      curDaily = userTotal.slice();
   }
   let finalString = '';
   let count = 1;

   while (curList.length > 0) {
      let i = curDaily.indexOf(Math.max(...curDaily));
      let messages = vals.splice(i, 1);
      let curPerson = curList.splice(i, 1);
      finalString = finalString + count + ". <@" + curPerson + ">: " + messages + "\%\n"
      count++;
   }

   return finalString;
}


client.on('ready', () => {
   getUsers();
   /*
   new CronJob('00 00 04 * * *', function () {
      var curRankings = getRankings();
      message.channel.send({
         embed: {
            color: 16711782,
            title: "Messages Sent Today",
            description: curRankings
         }
      });
   }, null, true, 'America/Los_Angeles');
   for (i = 0; i < count; i++) {
      userDaily[i] = 0;
   }*/
});

client.on('message', message => {

   let curID = newMessage.member.id;
   userIndex = userList.indexOf(curID);
   if (userIndex >= 0) {
      userDaily[userIndex]++;
      userTotal[userIndex]++;
   }

   if (message.content === "m ping") {
      message.reply("Pong: " + count + " members in this server.");
      message.reply(count);
      /*
      for (i = 0; i < userList.length; i++) {
         message.reply(userList[i]);
      }*/
   }
   /*
   if (message.content === "m rank") {
      let curRankings = getRankings();
      message.channel.send({
         embed: {
            color: 16711782,
            title: "Messages Sent Today",
            description: curRankings
         }
      });
   }
   */
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

