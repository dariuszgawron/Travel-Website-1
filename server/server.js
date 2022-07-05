const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const fs = require('fs');
const cors = require('cors');

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
const fileName = './db.json';
const fileWatcher = fs.watch(fileName);

io.on('connection', socket => {
    const onFileChange = () => {
        fs.readFile(fileName, (err,data) => {
            if(err) throw err;
            if(data.length>0) {
                socket.emit('trips',JSON.parse(data));
            }
        })
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
    res.json({'trips': JSON.parse(fs.readFileSync(fileName))});
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})