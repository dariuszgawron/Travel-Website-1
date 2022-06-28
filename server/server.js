const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const fs = require('fs');
// const jsonfile = require('jsonfile');

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });


io.on('connection', (socket) => {
    // return trips data
    console.log('podłaczony');
    // socket.emit('trips',jsonfile.readFile('./db.json'));
    socket.emit('trips',JSON.parse(fs.readFileSync('./db.json')));
    // let rawdata = fs.readFile('./db.json');
    // let trips = JSON.parse(rawdata);
    // socket.emit('trips',trips);

    //watch for changes
    fs.watchFile('./db.json', {
        persistent: true,
        interval: 50000
    },
    function () {
        // socket.emit(jsonfile.readFile('./db.json'));
        socket.emit('trips',JSON.parse(fs.readFileSync('./db.json')));
    })
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})