const io = require('socket.io')(3000, {
    cors: {
        origin: "*"
    }
})

const users = {};

io.on('connection', socket => {
    // console.log('New user');
    // socket.emit('chat-message', 'Hello World')
    socket.on('new-user', name=> {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    })
})