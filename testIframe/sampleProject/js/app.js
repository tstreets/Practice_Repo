document.body.onload = function() {
    initMenu();
}

function initMenu() {
    const menuItemsDOM = document.querySelectorAll(".game__menu__item");
    for(let item of menuItemsDOM) {
        item.onclick = game[item.dataset?.func];
    }
}

const game = {
    grid: [
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ],
    turn: 0,
    marker: 0,
    addOutput: function(message) {
        const outputDOM = document.querySelector(".game__output");
        const newMessageDOM = document.createElement(message.tag || "p");
        newMessageDOM.innerHTML = message.text;
        outputDOM.appendChild(newMessageDOM);
        outputDOM.scrollTo({
            top: outputDOM.scrollHeight
        })
    },
    clearSpaces: function(btn) {
        const spacesDOM = document.querySelectorAll(".game__board__space");
        for(let space of spacesDOM) {
            space.innerHTML = "";
            space.dataset.value = 0;
            space.dataset.state = "ready";
        }
        if(!!btn) btn.dataset.pressed = false;
    },
    markSpace: function() {
        if(this.dataset.state == "ready") {
            this.dataset.state = "used";
            this.dataset.value = (game.marker % 2) + 1;
            this.innerHTML = (parseInt(this.dataset.value) == 1) ? "X" : "O";
            game.markGrid(this.dataset.pos.split(","), parseInt(this.dataset.value));
            game.addOutput({text: `Player ${(game.turn % 2) + 1} placed ${this.innerHTML}.`});
            game.turn++;
            game.marker++;
        }
    },
    newGame: function() {
        const spacesDOM = document.querySelectorAll(".game__board__space");
        for(let space of spacesDOM) {
            space.onclick = game.markSpace;
        }
        game.addOutput({text: `${(!!game.turn) ? `</br><hr></br>` : ``}`});
        game.addOutput({text: `<i>A new Game has begun</i>`});
        game.addOutput({text: `<b>Player ${(game.turn % 2) + 1} begins.</b>`});
    },
    resetGame: function(e) {
        e.preventDefault();
        if(this.dataset.pressed != "true") {
            this.dataset.pressed = true;
            game.clearSpaces(this);
            game.marker = 0;
            game.newGame();
        }
    },
    markGrid: function(pos, value) {
        game.grid[parseInt(pos[1])][parseInt(pos[0])] = value;
        console.log(game.grid);
    },
    checkWin: function() {

    }
}