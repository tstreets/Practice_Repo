const socket = io();

/**
 * Initialize chatbox
 */
function initChatBox() {
    const chatBox = document.querySelector('#chat-box');
    chatBox.onsubmit = submitMessage;
    socket.emit('all messages');
}

/**
 * Handles chatbox message submit
 * @param {event} e event of the submit
 */
function submitMessage(e) {
    e.preventDefault();
    const msgInfo = getFormData(this);
    if(!!msgInfo.msg.trim()) {
        socket.emit('send message', {
            text: msgInfo.msg
        });
        this.reset();
    }
}

socket.on('all messages', res=> {
    updateMessages(res.msgs);
})

/**
 * Retrieves the data form a form
 * @param {element} form 
 * @returns {object} data from the form provided
 */
function getFormData(form) {
    return Object.fromEntries(new FormData(form));
}

/**
 * Update the messages shown in the chatbox
 * @param {object[]} msgs 
 */
function updateMessages(msgs) {
    const messages = document.querySelector('#messages');
    messages.innerHTML = '';
    for(let msg of msgs) {
        messages.innerHTML += `
        <h4>${msg.user}</h4>
        <p>${msg.text}</p>
        `;
    }
    messages.scrollTo({
        top: messages.scrollHeight
    })
}

initChatBox();