/**
 * @namespace Client
 * @description This handles the interactions between the game and server.
 */

const Client = {
    newPlayer: newPlayer
}

function newPlayer() {
    socket.emit('new player');
}

socket.on('new player', player=> {
    console.log(`User ${player.id} has joined!`);
})

socket.on('player left', player=> {
    console.log(`User ${player.id} has left the game.`);
})