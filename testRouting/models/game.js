exports.Game = class {
    constructor(games) {
        this.id = this.generateID(games);
    }

    generateID(games) {
        let newID = ``;
        for(let i = 0; i < 10; i++) {
            newID += parseInt(Math.random() * 10);
        }
        let used = games.find(game=> game.id == newID);
        return (!!used) ? this.generateID(games) : newID;
    }
}