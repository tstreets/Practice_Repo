const SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function SceneA() {
        Phaser.Scene.call(this, { key: 'sceneA' });
    },

    create: function() {
        this.input.mouse.disableContextMenu();
    
        this.add.dom(
            400, 280, // x,y
            'button', // tag
            {}, // style
            'Start Game' // innerHTML
        )
        .addListener('click')
        .on('click', e=> {
            console.log('start')
        });
    
        this.add.dom(
            400, 320,
            'button', 
            {},
            'Settings'
        )
        .addListener('click')
        .on('click', function(e) {
            console.log('setting');
            this.scene.start('sceneB');
        }, this)
    }
})

const SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function SceneB() {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },

    preload: function() {
        this.load.html('settings-form', '/assets/forms/settings.html')
    },

    create: function() {

        this.add.dom(400, 200)
        .createFromCache('settings-form');
        
        this.add.dom(
            400, 300,
            'button',
            {},
            'Go Back'
        )
        .addListener('click')
        .on('click', function(e) {
            console.log('Go Back');
            this.scene.start('sceneA');
        }, this)
    }
})

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    parent: 'game',
    dom: { createContainer: true },
    scene: [SceneA, SceneB]
}

const game = new Phaser.Game(config);