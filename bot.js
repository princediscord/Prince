const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";
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


    client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
  guild.owner.send(embed)
});

/*بلاييق البوت*/


  
  
  //////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////

/*سرفرات البوت*/

client.on('message', message => {
  if(message.content == (prefix + "admin bot")) {
    if(!message.author.id === '620689121211449351') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
      gname = g.name;
      gimg = g.iconURL;
      gmemb = g.members.size;
      gbots = g.members.filter(m=>m.bot).size;
      groles = g.roles.map(r=> {return r.name});
      let serv = new Discord.RichEmbed()
        .setAuthor(gname,gimg)
        .setThumbnail(gimg)
        .addField('Server bots',gbots)
        .addField('Server Member Count',gmemb = g.members.size)
        .setColor('RANDOM')
      message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
}) 
}
});  



/*اقتراح*/

client.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "sug")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        client.channels.get("661326625241169925").send(
            "\n" + "**" + " ● Suggested By : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + " ● Suggest : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription(' Suggested Sent')
             .setThumbnail(message.author.avatarURL)
             .setFooter("Adidas")
        message.channel.send(embed);
}
 });

/*مسح*/

client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Plus Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});
client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Plus Bot"
        }
      }}).then(msg => {msg.delete(100000)});
                          }
});

/*بنق*/

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + "ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
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

/*معلونات البوت*/
 
 client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
   .setColor("#8650a7")
  .addField("** :white_check_mark: Servers: **" , client.guilds.size)
  .addField("** :white_check_mark: Users: **" , client.users.size)
  .addField("** :white_check_mark: Channels: **" , client.channels.size)
    .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

/*اي دي*/
client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply(`
              
       **      
      
      ╭━━━┳╮╱╱╱╱╱╱╱ ╭━━╮╱╱╱╱╭╮
      ┃╭━╮┃┃╱╱╱╱╱╱╱ ┃╭╮┃╱╱╱╭╯╰╮
      ┃╰━╯┃┃╭╮╭┳━━╮ ┃╰╯╰┳━━╋╮╭╯
      ┃╭━━┫┃┃┃┃┃━━┫ ┃╭━╮┃╭╮┃┃┃
      ┃┃╱╱┃╰┫╰╯┣━━┃ ┃╰━╯┃╰╯┃┃╰╮
      ╰╯╱╱╰━┻━━┻━━╯ ╰━━━┻━━╯╰━╯
      **
      
      ***General Commands***
      **
      『${prefix}id/ معلومات عن حسابك』
      『${prefix}2id / معلومات عن الحساب في صوره』
      『${prefix}embed/ يكرر كلامك بمبيد』
      『${prefix}sug/ الإقتراحات』
      『${prefix}roles/ يطلع الرتب』
      『${prefix}roles-n يعطيك الرتب بالترتيب』
      『${prefix}server/ معلومات عن السيرفر』
      『${prefix}image/ يعرض صوره السيرفر』
      『${prefix}avatar/ يعرض صورتك او صوره شخص』
      『${prefix}dt/يعرض لك الوقت والتاريخ واليوم 』
      『${prefix}invites/ يعرض كم ضياف 』
      『${prefix}topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
      『${prefix}zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
      『${prefix}draw / يكرر الكلام في صوره』
      『${prefix}say / يكرر الكلام لتكتب』
      『${prefix}translate / يترجم』
      『${prefix}botserver / يحطيك سرفرات البوت بترتيب』
      『${prefix}short / اختصار الروابط』
      『${prefix}calculate / حاسبة』
      **
      ***Administrative Commands***
      **
      『${prefix}color 50 /انشاء 50 لون』
      『${prefix}color 100/انشاء 100 لون』
      『${prefix}color 140/انشاء 140 لوم』
      『${prefix}ct /انشاء روم كتابي』
      『${prefix}cv /انشاء روم صوتي』
      『${prefix}delet / مسح روم』
      『${prefix}bc /لإرسال رسالة جماعية』
      『${prefix}clear / لمسح الشات』
      『${prefix}addrole / لراية اوامر اعطاء الرتبه او حدفها للعضو』
      **
      ***Bot Commands***
      **
      『${prefix}ping/ يعرض لك سرعه اتصال البوت』
      『${prefix}uptime/ يعرض لك صار للبوت كم شغال』
      『${prefix}support/ سيرفر الدعم القني و المساعده』
      『${prefix}invite/ اضافه البوت』
      『${prefix}mb/ حاله الاعضاء』
      『${prefix}bot/ معلومات عن البوت』** `);
              
      
              }
              });

client.on('message', message => {
if(!message.channel.guild) return;
let args = message.content.split(' **PLUS BOT COMING SOON**
LINK : https://discord.gg/fCq2vzR').slice(1).join(' ');
if(message.author.id !== '620689121211449351') return
message.channel.sendMessage('✅')
client.users.forEach(m =>{
m.sendMessage(args)
  

                    
});

client.login(process.env.BOT_TOKEN);
