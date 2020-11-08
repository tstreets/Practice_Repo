/**
 * @namespace Game
 * @description This contains the js for the game functionality.
 */



/**
 * @member {Object} Game.config 
 * @description This contains the configurations for my Phaser game.
 * @property {Phaser Game Type} type This is the Phaser game type for my game.
 * @property {String} parent This is the id of the container for my game.
 * @property {Number} height This is the height of the game's screen.
 * @property {Number} width This is the width of the game's screen.
 * @property {Object} scene This holds the phaser fuctions needed for my game.
 */
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    height: 600,
    width: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
}



/**
 * @member Game.game
 * @description This is the Phaser game object.
 */
const game = new Phaser.Game(config);



/**
 * @method Game.preload
 * @description This loads in my assets before the game starts
 */
function preload() {
    this.load.image('bg-sky', '/images/sky.png');
    this.load.image('ground', '/images/platform.png');
    this.load.image('star', '/images/star.png');
    this.load.image('bomb', '/images/bomb.png');
    this.load.spritesheet('player', '/images/dude.png', {frameHeight: 48, frameWidth: 32});
}



/**
 * @method Game.create
 * @description This runs once at the start of the game.
 */
function create() {
    this.add.image(400, 300, 'bg-sky');
    
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    players = this.physics.add.staticGroup();


    user = this.physics.add.sprite(100, 450, 'player');
    user.setCollideWorldBounds(true);
    // player.setBounce(0.2);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { 
            start: 0, 
            end: 3 
        }),
        frameRate: 10,
        repeat: -1 
    });

    this.anims.create({
        key: 'turn',
        frames: [{
            key: 'player',
            frame: 4
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { 
            start: 5, 
            end: 8 
        }),
        frameRate: 10,
        repeat: -1 
    });

    this.physics.add.collider(user, platforms);

    Client.newPlayer();
}


/**
 * @method Game.update
 * @description This runs throughout the game.
 */
function update() {

    cursors = this.input.keyboard.createCursorKeys();

    if(cursors.left.isDown) {
        Client.playerMoved({x: user.x, y: user.y});
        user.setVelocityX(-160);
        user.anims.play('left', true);
    }
    else if(cursors.right.isDown) {
        Client.playerMoved({x: user.x, y: user.y});
        user.setVelocityX(160);
        user.anims.play('right', true);
    }
    else {
        Client.playerMoved({x: user.x, y: user.y});
        user.setVelocityX(0);
        user.anims.play('turn');
    }

    if((cursors.space.isDown || cursors.up.isDown) && user.body.touching.down) {
        Client.playerMoved({x: user.x, y: user.y});
        user.setVelocityY(-330);
    }
}

function updatePlayers(allPlayers) {
    players.clear(true, true);
    for(let player of allPlayers) {
        if(player.id != userID) {
            players.create(player.pos.x, player.pos.y, 'player');
        }
    }
    // const currentPlayer = players.find(curPlayer=> curPlayer.id == player.id);
    // if(currentPlayer) {
    //     players.remove(currentPlayer);
        // players.create(player.pos.x, player.pos.y, 'player');
    // }
}