import * as GameClass from './game-classes.js';

let player = new GameClass.Creature();
let creatures = [player];

const SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function SceneA() {
        Phaser.Scene.call(this, {key: 'SceneA'});
    },
    preload: function() {
        this.load.spritesheet('robot', 'kenney_nl/Robot/character_robot_sheet.png', {frameWidth: 96, frameHeight: 128});
    },

    create: function() {
        player.setScene(this);
        player.createSprite({key: 'robot'});

        this.input.on('pointerdown', pointer=> {
            if(pointer.button == 0) player.dest = {x: pointer.x, y: pointer.y};
        });

        this.anims.create({
            key: 'robot idle',
            frames: this.anims.generateFrameNumbers('robot', { frames: [0] }),
            frameRate: 10
        })

        this.anims.create({
            key: 'robot walk',
            frames: this.anims.generateFrameNumbers('robot', { frames: [36,37,38,39,40,41,42,43] }),
            frameRate: 10,
            repeat: -1
        })
    },

    update: function() {
        player.moveToDest();
    }
});

const config = {
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {debug: true},
    },
    dom: {createContainer: true},
    parent: 'game',
    backgroundColor: '#252525',
    width: 800,
    height: 600,
    scene: [SceneA],
};

const newGame = new Phaser.Game(config);