const doc = document; doc.qs = doc.querySelector; doc.qsAll = doc.querySelectorAll;

const gm = {
    players : [
        {
            name: "Ty",
            spaces: [],
            turn: 1
        },
        {
            name: "Op",
            spaces: [],
            turn: 2
        }
    ],
    turn: 1
}

doc.body.onload = ()=> {
    initGame();
    outputMessage({text: `<i>${gm.players[0].name} starts the game.</i>`});
}

function initGame() {
    const spacesDOM = doc.qsAll('.space');
    for(let space of spacesDOM) {
        space.onclick = spaceClicked;
    }
}

function spaceClicked() {
    if(this.dataset.marked != "true") {
        this.dataset.marked = "true";
        gm.players[((gm.turn - 1) % 2)].spaces.push(this);
        outputMessage({text: `<b>${gm.players[((gm.turn - 1) % 2)].name}</b> placed an ${((gm.turn - 1) % 2) ? "O" : "X"} on space ${this.dataset.row}${this.dataset.col}`});
        piecePlayed();
    }
}

function piecePlayed() {
    gm.turn += 1;
    markSpaces();
}

function markSpaces() {
    for(let player of gm.players) {
        for(let space of player.spaces) {
            space.innerHTML = ((player.turn - 1) % 2) ? "O" : "X";
        }
    }
    checkWin();
}

function checkWin() {
    const win = {player: null, value: false};
    for(let player of gm.players) {
        for(let space of player.spaces) {
            for(let prop of Object.keys(space.dataset)) {
                if(prop != 'marked' && !win.value) {
                    const foundMatches = player.spaces.filter(cSpace=> cSpace.dataset[prop] == space.dataset[prop]).length;
                    if(foundMatches > 2) {
                        win.value = true;
                        win.player = player.name;
                    }
                }
            }
        }
    }
    if(win.value) {
        outputMessage({text: `<h1>${win.player} won!</h1>`});
    }
}

function outputMessage(message) {
    doc.qs('.output').innerHTML += `<div>${message.text}</div>`;
}