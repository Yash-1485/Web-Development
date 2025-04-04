const socket = io('http://localhost:7000');

const form = document.getElementById('send_form');
const messageInput = document.getElementById('send_message');
const messageContainer = document.getElementById('message_container');

const append = (message, position) => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message');
    messageBox.classList.add(position);
    messageBox.innerHTML = message;
    messageContainer.append(messageBox);
}

const user = prompt('Enter your name')||'Yash';
// const user='Yash';

socket.emit("new-user-joined", user);

socket.on("user-joined", (user) => {
    append(`<span class="font-bold">${user} </span> <span class="text-green-500 font-bold">joined</span> the chat`, 'right');
});

socket.on("receive", (userObject) => {
    append(`<span class="font-bold">${userObject.name}: </span> ${userObject.message}`, 'left');
});

socket.on("user-left", (user) => {
    append(`<span class="font-bold">${user} </span> <span class="text-red-500 font-bold">left</span> the chat`, 'right');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value;
    append(`<span class="font-bold">You: </span>${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});