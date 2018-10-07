const Discord = require('discord.js');
const bot=new Discord.Client();
var prx="<@434060815499526175>";
const sw=["fuck","damn","shit"]; 
var join;
var joinA;
var joinB;

bot.on('message', (message) => {
    var n=message.guild.roles.find('name','Not Dangerous');
    const c=message.content;
    if(c.includes("don\'t swear!")) {
        message.delete(2000);
    }
    if(message.author.bot) return;
    if(c==prx+" invite") {
        message.channel.send('Here '+message.author+":  https://discord.gg/nntvGP4");
    }
    if(message.author==join && c!=joinA+joinB+""){
        message.channel.send("No it is not "+join+".");
        join=0;
    }
    if(c.startsWith(prx+" join")) {
        join=message.author;
        joinA=Math.floor(Math.random()*20);
        joinB=Math.floor(Math.random()*20);
        message.channel.send("Ok then "+join+", what is "+joinA+"+"+joinB+"?");
    }
    if(c==joinA+joinB+"" && message.author==join){
        message.channel.send("Welcome "+join+"!");
        message.member.addRole(n);
        join=0;
    }
    if(c==prx+' ping'){
        message.channel.send('pong');
    }
    if(c==prx+' pong'){
        message.channel.send('ping');
    }
    if(c.startsWith(prx+" echo")) {
        var echo="";
        for(var i=(prx+" echo").length;i<c.length;i++) {
            echo+=c[i];
        }
        message.channel.send(echo);
    }
    for(var s=0;s<sw.length;s++){
        if(c.toLowerCase().includes(sw[s])) {
            message.delete();
            var locN=message.member.roles.find('name','Not Dangerous');
            if(locN) {
                message.member.removeRole(locN)
            }else{
                return message.channel.send("Couldn\'t find that role");
            }
            message.channel.send("Hey "+message.author+" don\'t swear!");
        }
    }
    if(c.startsWith(prx+" math")) {
        var m="";
        for(var i=(prx+" math).length;i<c.length;i++) {
            m+=c[i];
        }
        message.channel.send(eval(m)));
    }
})
bot.login(process.env.token);
