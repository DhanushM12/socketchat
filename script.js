const socket = io('http://localhost:3000');

const name = prompt('What is your name?');
appendMessage('You Joined');
socket.emit('new-user', name);
socket.on('chat-message', data => {
    // console.log(data)
})

socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})

