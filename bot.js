const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
const developers = ("620689121211449351")
                   
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith('p' + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "خروج")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅${argesult}**`)
  }
  if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('p' + 'pic')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  
}
});

client.on("message", message => {//bc

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}\n`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}\n`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "ofbc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m} \n`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find('name', `・joins`)
let memberavatar = member.user.avatarURL
if (!welcomer) return;
if(welcomer) {
moment.locale('ar-ly');
var mrx = member.user;
let mrxembed = new Discord.RichEmbed()
.setTitle(mrx.username,`#${mrx.discriminator}`)
.addField('» Joined Discord ago',`${moment}(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
.addField('» Your Number',`${member.guild.memberCount}`,true)
.setThumbnail(mrx.avatarURL)
.setFooter("Zombie Games.")
welcomer.send({embed:mrxembed});          
}})
 
client.on('guildMemberAdd', member => {
member.guild.fetchInvites().then(guildInvites => {
const ei = invites[member.guild.id];
invites[member.guild.id] = guildInvites;
const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
const inviter = client.users.get(invite.inviter.id);
const logChannel = member.guild.channels.find(channel => channel.name === `・joins`);
if(!logChannel) return;
setTimeout(() => {
logChannel.send(`Invited By: <@${inviter.id}>`);
},2000)
});
});
client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});





  

                    


client.login(process.env.BOT_TOKEN);
