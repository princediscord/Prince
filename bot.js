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


     ***

      **

      『${كتابي』

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

      『${prefix}bot/ معلومات عن البوت』

      **

      ***Games Commands***

      **

      『${prefix}لعبه صراحه/صراحه』

      『${prefix}لعبه خواطر/خواطر 』

      『${prefix}يعطيك ذكر من الاذكار/ اذكار』

      『${prefix}يخيرك بين شي وشي / لو خيروك』

      『${prefix}يعطيك عقاب و لازم تنفذه/ عقاب』

      『${prefix}لعبه اسئله / كت』

      『${prefix}للعب لعبه قلب العمله/ عمله』

      『${prefix}للعب لعبه عل تعلم/ هل تعلم』

      『${prefix}للعب لعبه مريم/ مريم』

      『${prefix}يعطيك كلمات حب/ حب』

      **

      ***profile Commands***

      

      『soon』

      

      _ _---------------- _ _

      BOT By: |<@630168565752004621>|

      

      **

      

      `)

   message.author.sendEmbed(embed

   

   }

   });  

client.on('message', message => {

     if (message.content === (prefix + "help")) {

     let embed = new Discord.RichEmbed()

  .setAuthor(message.author.username)

  .setColor("#8650a7")

  .addField("Done" , " تــــم ارســالك في الخــاص")

  message.channel.sendEmbed(embed);

    }

});

client.login(process.env.BOT_TOKEN);
