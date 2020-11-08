const doc = document; doc.qs = doc.querySelector; doc.qsAll = doc.querySelectorAll;

let players = [];
let user = {};
let turn = 1;

doc.body.onload = ()=> {
    initGame();
}

function initGame() {
    const spacesDOM = doc.qsAll('.space');
    for(let spaceDOM of spacesDOM) {
        spaceDOM.onclick = spaceClicked;
    }
}

function spaceClicked() {
    if(turn > -1) {
        if(players.find(cPlayer=> cPlayer.id == user.id)) {
            if((turn+1)%2 == user.id) {
                const spaceObj = {
                    row: this.dataset.row,
                    col: this.dataset.col,
                    topbottom: this.dataset.topbottom,
                    bottomtop: this.dataset.bottomtop
                };
                user.spaces.push(spaceObj);
                players[(turn + 1) % 2] = user;
                turn++;
                playerPlayed();
            }
        }
    }
}

function markSpaces() {
    const spacesDOM = doc.qsAll('.space');
    for(let spaceDOM of spacesDOM) {
        const sDOMObj = {
            row: spaceDOM.dataset.row,
            col: spaceDOM.dataset.col,
            topbottom: spaceDOM.dataset.topbottom,
            bottomtop: spaceDOM.dataset.bottomtop
        }
        for(let player of players) {
            const foundSpace = player.spaces.find(pSpace=> {
                return (pSpace.row == sDOMObj.row && pSpace.col == sDOMObj.col );
            });
            if(foundSpace) {
                spaceDOM.innerHTML = (player.id % 2) ? "O" : "X";
            }
        }
    }
}

function checkWin() {
    if(turn > 4) {
        const win = {
            player: null,
            value: false
        }
        for(let player of players) {
            const temp = {
                row: [],
                col: [],
                topbottom: [],
                bottomtop: []
            }
            for(let space of player.spaces) {
                for(let prop of Object.keys(space)) {
                    temp[prop].push(space[prop]);
                }
            }
            for(let prop of Object.keys(temp)) {
                for(let val of temp[prop]) {
                    if(temp[prop].filter(cVal=> cVal == val).length == 3) {
                        console.log(temp[prop]);
                        if(val) {
                            win.value = true;
                            win.player = player.id
                            turn = -1;
                        }
                    }
                }
            }
        }
        if(win.value) {
            doc.qs('.winner').innerHTML = `Player ${win.player} Wins!`;
            setTimeout(resetGame, 1250);
        }
    }
}

function resetGame() {
    turn = 0;
    for(let player of players){
        player.spaces = [];
    }
    playerPlayed();
}