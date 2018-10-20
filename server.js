var express=require('express');
var app=express();
var server=app.listen(5500);
console.log("Hello");
app.use(express.static('public'));
var socket=require('socket.io');
var io=socket(server);
io.sockets.on('connection', newConnection);
function newConnection(socket) {
    console.log("new connection");
    socket.on('mouse',mouseMsg);
    function mouseMsg(data) {
        io.sockets.emit('mouse',data);
    }
}