initGameBtns();

function initGameBtns() {
    const btn = document.querySelector('#stopGame');
    btn.onclick = stopGame;
}

function stopGame() {
    const gameId = location.pathname.replace('/game/', '');
    socket.emit('stop game', {gameid: gameId});
}

socket.on('game stopped', ()=> {
    location.href = '/';
})