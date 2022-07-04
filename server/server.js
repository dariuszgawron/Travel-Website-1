const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const fs = require('fs');
const cors = require('cors')

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const clientUrl = "http://localhost:3000";
const io = socketIO(server, {
    cors: {
      origin: clientUrl,
      methods: ["GET", "POST"]
    }
});
const fileWatcher = fs.watch('./db.json');
const tripsData = require('./db.json');

io.on('connection', socket => {
    const onFileChange = () => {
        socket.emit('trips',require('./db.json'));
    }

    // Add listener
    fileWatcher.on('change',onFileChange);

    // Remove listener
    socket.on('disconnect', () => {
        fileWatcher.off('change',onFileChange);
    })
});

app.use(cors());
app.get("/trips", (req,res) => {
    res.json({'trips': tripsData});
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})