const express = require('express');
const http = require('http');
const path = require('path')
const socketio = require('socket.io');
const filter = require('bad-words');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const {genMsg, genLocMsg} = require('./utils/messages')


const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

// let count  = 0;
io.on('connection',(socket)=>{
    console.log('New websocket connection');
    
    socket.on('join',({username,room})=>{
        socket.join(room);
        socket.emit('message',genMsg("Welcome to the chat service!"));
        socket.broadcast.to(room).emit('WelcomeMsg',genMsg(`${username} has joined the room`));
        // io.to.emit()
        // socket.broadcast.to.emit()
    })
    
    
    socket.on('sendMessage',(msg,callback)=>{
        const wordFilter = new filter();
        if(wordFilter.isProfane(msg)){
            return callback('This kind of language is not permitted')
        }
        io.emit('message',genMsg(msg));
        callback();
    })
    socket.on('sendLocation',({latitude,longitude},callback)=>{
        io.emit('Locationmessage',genLocMsg(`https://google.com/maps?q=${latitude},${longitude}`));
        callback('location shared')
    })

    socket.on('disconnect',()=>{
        io.emit('message', genMsg('A user has left'));
    })
})

server.listen(port,()=>{
    console.log("Server is up on port",port);
});


