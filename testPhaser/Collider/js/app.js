let player;
let enemies = [];

/**
 * Scene for testing Colliders
 */
const SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function SceneA() {
        Phaser.Scene.call(this, {key: 'SceneA'});
    },

    preload: function() {
        this.load.spritesheet('Robot', 'kenney_nl/Robot/Tilesheet/character_robot_sheet.png', 
        { frameWidth: 96, frameHeight: 128 });
    },

    create: function() {
        player = addPhysicsSprite({
            y: 100
        }, this);
        player.speed = 150;
        player.debugBodyColor = 0x00ff00;

        for(let i = 0; i < 2; ++i) {
            enemies.push(addPhysicsSprite({
                y: 300 + (Math.random() * (300-64)),
                x: 64 + (Math.random() * (800-64)),
                static: true
            }, this));
        }

        this.input.on('pointerdown', pointer=> {
            player.dest = {x: pointer.x, y: pointer.y};
        });


        this.physics.add.collider(player, enemies, (p,e)=> {
            const index = enemies.findIndex(en=> en == e);
            alert(`New Collision with Enemy ${index}`);
        }, (p,e)=> {
            p.body.stop(), p.dest = null;
        }, this);
    },

    update: function() {
        movePlayer();
    }
});

/**
 * Configuration for Phaser Game
 * Set physics.arcade.debug = false when deploying
 */
const config = {
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {debug: true}
    },
    parent: 'game',
    backgroundColor: '#252525',
    width: 800,
    height: 600,
    dom: {createContainer: true},
    disableContextMenu: true,
    scene: [SceneA]
};

/**
 * Ref for Phase Game
 */
const game = new Phaser.Game(config);

/**
 * Creates a sprite, that uses physics, for the current scene.
 * @param {Object} spriteConfig Configuration for sprite, send empty object for default configuration
 * @param {String} spriteConfig.key Key of image to use for sprite, defaults to 'Robot' when not set
 * @param {Number} spriteConfig.y Y position for sprite, defaults to 300 when not set
 * @param {Number} spriteConfig.x X position for sprite, defaults to 400 when not set
 * @param {String} spriteConfig.static Determines if sprite is static, defaults to false
 * @param {*} gameRef Reference to scene, send over keyword this
 * @returns {Phaser.Physics.Arcade.Sprite} Returns Phaser Physics Game Object
 */
function addPhysicsSprite(spriteConfig, gameRef) {
    // return gameRef.physics.add.sprite(spriteConfig.x || 400, spriteConfig.y || 300, spriteConfig.key = 'Robot');
    return (!spriteConfig.static) 
    ? gameRef.physics.add.sprite(spriteConfig.x || 400, spriteConfig.y || 300, spriteConfig.key = 'Robot')
    : gameRef.physics.add.staticSprite(spriteConfig.x || 400, spriteConfig.y || 300, spriteConfig.key = 'Robot');
}

/**
 * Moves player towards their destination
 */
function movePlayer() {
    if(player.dest) {
        const xDiff = player.x - player.dest.x;
        const yDiff = player.y - player.dest.y;
        if(Math.abs(xDiff) > 5 || Math.abs(yDiff) > 5) {
            player.setVelocity(
                ((Math.abs(xDiff) < 5) ? 0 : (xDiff > 0) ? -player.speed : player.speed),
                ((Math.abs(yDiff) < 5) ? 0 : (yDiff > 0) ? -player.speed : player.speed)
            )
        }
        else {
            player.body.stop(), player.dest = null;
        }
    }
}