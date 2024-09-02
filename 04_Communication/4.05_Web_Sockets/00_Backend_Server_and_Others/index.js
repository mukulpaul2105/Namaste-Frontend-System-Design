const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io')

const PORT = 3010;
const app = express();
const server = createServer(app)
const io = new Server(server)


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log("Connection established");
    socket.on('chat message', (msg) => {
        console.log("received message: ", msg)
        io.emit('chat message', msg);
    });
    
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})

server.listen(PORT, () => {
    console.log("called")
});