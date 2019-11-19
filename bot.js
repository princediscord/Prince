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
  client.user.setStatus("dnd");
  var ms = 100000 ;
  var setGame = [`help Servers ${client.guilds.size} `,`invite Users ${client.users.size}`];
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


client.login(process.env.BOT_TOKEN);
