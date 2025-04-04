// const http=require('http').createServer().listen(8000);
// const io = require('socket.io')(http);
const io = require('socket.io')(7000, {
    cors: {
        origin: "*",  // Allow all origins
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on("connection", socket => {
    socket.on("new-user-joined", name => {
        if (!name) return;  // Avoid undefined names
        // console.log('New user joined:', name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on("send", message => {
        if (users[socket.id]) {
            socket.broadcast.emit('receive', { name: users[socket.id], message: message });
        }
    });

    socket.on("disconnect", () => {
        if (users[socket.id]) {
            socket.broadcast.emit("user-left", users[socket.id]);
            delete users[socket.id];
        }
    });
});
