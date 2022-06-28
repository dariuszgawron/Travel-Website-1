const express = require('express');
const socketIO = require('socket.io');
// const path = require('path');
const http = require('http');
const jsonfile = require('jsonfile');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 5000;

// var EventEmitter = require('events').EventEmitter;
// var footballWatcher = new EventEmitter();


io.on('connection', (socket) => {
    socket.emit("hello", 1, "2", { 3: '4', 5: Buffer.from([6]) });
    // socket.emit("hello", "world");
    // console.log('ok');
    fs.watch('db.json',(event, fileName) => {
        // console.log('ok2');
        jsonfile.readFile('db.json', (err, data) => {
            // const data = data;
            // console.log('test');
            socket.volatile.emit('notification', data);
        })
    });

    socket.emit('data',{"test": "what are you doing?"});


    console.log('Client connected',socket.id);
    socket.emit("hadnshake","connected to backend");
    socket.on("test", (data) => {
        console.log("test data is:",data);
        socket.emit("test",data);
    });

    // emitujemy tripsową bazę
    let rawdata = fs.readFileSync('./db.json');
    let trips = JSON.parse(rawdata);
    socket.emit('trips',trips);

    fs.watchFile('./db.json', {
        persistent: true,
        interval: 100000,
      },
      function(data) {
        console.log('read file');
        // io.emit('trips', { message:data });
        let rawdata = fs.readFileSync("./db.json");
        let trips = JSON.parse(rawdata);
        io.emit('trips', trips);
      },
    )

    // footballWatcher.on('update', function(){
    //     io.emit('footballUpdate', {"test":"da"});
    // });

    // footballWatcher.emit('update'); 

    // if(updated){
    //     footballWatcher.emit('update');        
    // };
});



// io.on('connection', (socket) => {

//     console.log('new client connected');
// });

server.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
})