/**
 * @namespace game
 */

/**
 * @member {Object} game.config This is the configuration for my phaser game.
 * @property {Any} type This is the game type.
 * @property {Number} width This is the width of my game's screen.
 * @property {Number} height This is the height of my game's screen.
 * @property {String} parent This is the id of the container.
 */
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 550,
    parent: 'game',
    scene: {
        preload: preload,
        create: create
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    }
}

const game = new Phaser.Game(config)

function preload() {
    this.load.image('bg-sky', '/images/sky.png');
    this.load.image('star', '/images/star.png');
    this.load.image('ground', '/images/platform.png');
    this.load.spritesheet('player', '/images/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
    this.add.image(400, 275, 'bg-sky');

    const platforms = this.physics.add.staticGroup();
    platforms.create(200, 550, 'ground');
    platforms.create(600, 550, 'ground');

    this.input.on('pointerdown', function(pointer) {
        this.add.image(pointer.x, pointer.y, 'star');
    }, this);

    const player = this.physics.add.sprite(400, 450, 'player');
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });
}