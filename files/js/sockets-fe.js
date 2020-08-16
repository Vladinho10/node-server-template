/* eslint-disable */
const socket = io();
console.log({ socket });

const form = document.querySelector('form');
const input = document.querySelector('#m');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (e)=> {
    e.preventDefault(); // prevents page reloading
    const input = document.querySelector('#m');
    const trimmed = input.value.trim();

    if (trimmed) {
        socket.emit('chat message', input.value);
    }

    input.value = '';

    return false;
});

socket.on('chat message', (msg) => {
    const textNode = document.createTextNode(msg);
    const li = document.createElement("LI");

    li.appendChild(textNode);
    messages.appendChild(li);
});
