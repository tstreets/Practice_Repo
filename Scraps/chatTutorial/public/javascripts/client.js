const chatbox = document.querySelector(".chatbox");

socket.emit('new user');

socket.on('new user', user=> {
    chatbox.innerHTML += `<p>User ${user.id} has joined the chat.</p>`;
});

socket.on('user left', user=> {
    chatbox.innerHTML += `<p>User ${user.id} has left the chat.</p>`;
});

socket.on('new message', message=> {
    chatbox.innerHTML += `<p><b>User ${message.user}:</b> ${message.text}</p>`;
});

const form = document.querySelector(".messageForm");
form.onsubmit = submitForm;

/**
 * 
 * @param {Event} e 
 */
function submitForm(e) {
    e.preventDefault();
    const formData = getFromData(this);
    if(!!formData.message) {
        socket.emit('new message', formData.message);
    }
    this.reset();
}

function getFromData(form) {
    return Object.fromEntries(new FormData(form));
}