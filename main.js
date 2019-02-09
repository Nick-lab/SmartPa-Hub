var express = require('express')
  , http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

const port = 3000;

const get = require('./modules/get');
const socketHandler = require('./modules/socket');

global.paths = {
    root: __dirname
};

app.get('*', (req, res)=>{
    get.process(req,res);
})

io.on('connection', (socket)=>{
    socketHandler.process(socket);
})

server.listen(port, ()=>{
    console.log('Listening on port: '+ port);
})