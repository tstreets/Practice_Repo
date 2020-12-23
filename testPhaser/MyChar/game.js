let player;;

const sceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize: function SceneA() {
        Phaser.Scene.call({key: 'SceneA'});
    },
    preload: function() {
        this.load.image('penguin', 'assets/peng_01.png');
        this.load.html('name tag', 'assets/dom/name.html');
    },
    create: function() {
        player = this.add.image(400, 300, 'penguin');
        player.speed = 1.5;
        player.name = this.add.dom(player.x, player.y - 50).createFromHTML(`
        <h1 class='name me'>${`Ty`}</h1>`
        );
        console.log(player.name);
        
        this.input.on('pointerdown', pointer=> {
            if(!pointer.button) player.dest = {x: pointer.x, y: pointer.y};
        });
    },
    update: function() {
        if(player.dest) {
            const xDiff = player.x - player.dest.x;
            const yDiff = player.y - player.dest.y;
            if(Math.abs(xDiff) < 5 && Math.abs(yDiff) < 5) {
                player.dest = null;
            }
            else {
                player.x += (Math.abs(xDiff) < 5) ? 0 : (xDiff > 0) ? -player.speed : player.speed;
                player.y += (Math.abs(yDiff) < 5) ? 0 : (yDiff > 0) ? -player.speed : player.speed;
            }
        }
        player.name.x = player.x;
        player.name.y = player.y - 35;
    }
});

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#757575',
    width: 800,
    height: 600,
    dom: {createContainer: true},
    disableContextMenu: true,
    scene: [sceneA],
}

const game = new Phaser.Game(config);