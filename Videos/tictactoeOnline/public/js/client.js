socket.emit('new player');

function playerPlayed() {
    socket.emit('player played', {
        turn: turn, 
        players: players
    });
}

socket.on('new player', player=> {
    // console.log(`Player ${player.id} has joined the game`);
});

socket.on('player left', player=> {
    // console.log(`Player ${player.id} has left the game`);
});

socket.on('set stats', player=> {
    user = player;
});

socket.on('players', playersRef=> {
    players = playersRef;
    markSpaces();
})

socket.on('turn', turnRef=> {
    turn = turnRef;
    checkWin();
})