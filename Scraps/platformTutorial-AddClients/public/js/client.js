/**
 * @namespace Client
 * @description This handles the interactions between the game and server.
 */

const Client = {
    newPlayer: newPlayer,
    playerMoved: playerMoved
}

function newPlayer() {
    socket.emit('new player');
}

function playerMoved(newPos) {
    socket.emit('player moved', newPos);
}

socket.on('new player', player=> {
    console.log(`User ${player.id} has joined!`);
})

socket.on('player left', player=> {
    console.log(`User ${player.id} has left the game.`);
})

socket.on('player moved', allPlayers=> {
    updatePlayers(allPlayers);
})

socket.on('set userID', idRef=> {
    userID = idRef;
})