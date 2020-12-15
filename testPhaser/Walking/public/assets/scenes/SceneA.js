exports.SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize: function SceneA() {
        Phaser.Scene.call(this, {key: 'SceneA'});
    },

    preload: function() {
        this.load.spritesheet('player', 
        '/assets/Kenney_Toons/Male_person/Tilesheet/character_malePerson_sheet.png',
        {
            frameWidth: 96,
            frameHeight: 128
        });
    },
    create: function() {
        player = this.add.sprite(400,300, 'player');
        player.speed = 2.5;
        this.input.on('pointerdown', pointer=> {
            if(!pointer.button) {
                player.dest = {x: pointer.x, y: pointer.y};
            }
        }, this);

        this.anims.create({
            key: 'idle',
            frames: [
                {
                    key: 'player',
                    frame: 0
                }
            ],
            frameRate: 10,
            repeat: -1 
        });

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { 
                start: 36,
                end: 43
            }),
            frameRate: 10,
            repeat: -1 
        });
    },
    update: function() {
        if(player.dest) {
            const xDiff = getDistance(player.x, player.dest.x);
            const yDiff = getDistance(player.y, player.dest.y);
            if(Math.abs(xDiff) > 5 || Math.abs(yDiff) > 5) {
                player.x += (Math.abs(xDiff) < 5) ? 0 : (xDiff > 0) ? -player.speed : player.speed;
                player.y += (Math.abs(yDiff) < 5) ? 0 : (yDiff > 0) ? -player.speed : player.speed;
                player.flipX = (xDiff > 0);
                player.anims.play('walk', true);
            }
            else {
                player.anims.play('idle', true);
            }
        }
    }
})