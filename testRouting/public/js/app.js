document.body.onload = function() {
    const newGame = document.querySelector('#newGame');
    if(!!newGame) {
        newGame.onsubmit = createNewGame;
    }
    const refreshList = document.querySelector('#refreshList');
    if(!!refreshList) {
        refreshList.onsubmit = refreshGameList;
    }
    if(location.pathname.includes('/game')) {
        const gameID = location.pathname.replace('/game/', '');
        socket.emit('check game', {gameid: gameID});
    }
    if(location.pathname == '/') {
        socket.emit('all games');
    }
}

socket.on('game checked', data=> {
    if(!data.status) {
        location.href = '/error';
    }
});

socket.on('all games', data=> {
    const gameList = document.querySelector('#gameList');
    gameList.innerHTML = ``;
    for(let game of data.games) {
        gameList.innerHTML += `
            <div>
                <h2>${game.id}</h2>
                <a href='/game/${game.id}'>Join Game</a>
            </div>
        `;
    }
})

/**
 * 
 * @param {event} e 
 */
function createNewGame(e) {
    e.preventDefault();
    socket.emit('new game');
}

socket.on('new game', data=> {
    location.href = `/game/${data.gameid}`;
})

/**
 * 
 * @param {event} e 
 */
function refreshGameList(e) {
    e.preventDefault();
    socket.emit('all games');
}