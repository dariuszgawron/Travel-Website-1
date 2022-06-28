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

// const publicDirectoryPath=path.join(__dirname,"/public");

// app.use(express.static(publicDirectoryPath));

// app.get('/',(req,res)=>{
//     res.send('Express is up and running!');
// });

// io.on('connection', (socket) => {
//     fs.watch('db.json',(event, fileName) => {

//         jsonfile.readFile('db.json', (err, data) => {
//             // const data = data;
//             console.log('test');
//             socket.volatile.emit('notification', data);
//         })
//     })
// });

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */

    console.log('new client connected');
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
})