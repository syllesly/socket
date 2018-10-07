const Discord = require('discord.js');
const bot=new Discord.Client();
var prx="<@434060815499526175>";
const sw=["fuck","damn","shit"];
var join;
var joinA;
var joinB;

bot.on('message', (message) => {
    var n=message.guild.roles.find('name','Not Dangerous');
    var c=message.content;
    var args=c.split(" ")
    if(c.includes("don\'t swear!")) {
        message.delete(2000);
    }
    if(message.author.bot) return;
    if(args[0]==prx && args[1]=="invite") {
        message.channel.send('Here '+message.author+":  https://discord.gg/nntvGP4");
    }
    if(message.author==join && c!=joinA+joinB+""){
        message.channel.send("No it is not "+join+".");
        join=0;
    }
    if(args[0]==prx && args[1]=="join") {
        join=message.author;
        joinA=Math.floor(Math.random()*20);
        joinB=Math.floor(Math.random()*20);
        message.channel.send("Ok then "+join+", what is "+joinA+"+"+joinB+"?");
    }
    if(args[0]==joinA+joinB+"" && message.author==join){
        message.channel.send("Welcome "+join+"!");
        message.member.addRole(n);
        join=0;
    }
    if(args[0]==prx && args[1]=='ping'){
        message.channel.send('pong');
    }
    if(args[0]==prx && args[1]=='pong'){
        message.channel.send('ping');
    }
    if(args[0]==prx && args[1]='echo') {
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
    if(args[0]==prx && args[1]=="math") {
        var s="";
        for(var i=2;i<args.length;i++) {
            s+=args[i];
        }
        message.channel.send(eval(s));
    }
})
bot.login(process.env.token);
