const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "p";
const developers = ("620689121211449351")
                   
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith('p' + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ('p' + "خروج")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('p' + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('p' + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('p' + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅${argesult}**`)
  }
  if (message.content.startsWith(' p' + 'name')) {
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

client.on('ready', function(){
  client.user.setStatus("idle");
  var ms = 100000 ;
  var setGame = [`${prefix}help Servers ${client.guilds.size} `,`${prefix}invite Users ${client.users.size}`];
  var i = -1;
  var j = 0;
  setInterval(function (){
    if( i == -1 ){
      j = 1;
    }
    if( i == (setGame.length)-1 ){
      j = -1;
    }
    i = i+j;
    client.user.setGame(setGame[i],`https://www.twitch.tv/peery13`);
  }, ms);100000
  
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////

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
        client.channels.get("444186851390128148").send(
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
            if (message.content.startsWith(prefix + "مسح")) {
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

client.login(process.env.BOT_TOKEN);
