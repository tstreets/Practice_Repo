const SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize: function SceneA() {
        Phaser.Scene.call(this, {key: 'SceneA'});
    },

    preload: function() {
        this.load.html('login-form', '/dom/forms/login.html');
    },
    create: function() {
        this.input.mouse.disableContextMenu();


        this.add.dom(400,300)
        .createFromCache('login-form')
        .addListener('click')
        .on('click', e=> {
            e.preventDefault();
            if(e.target.dataset.submit) {
                const loginForm = document.querySelector('#login-form');
                const loginInfo = getFormData(loginForm);
                console.log(validateFormData(loginInfo));
            }
        }, this)
    },
    update: function() {}
});

const config = {
    parent: 'game',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    dom: { createContainer: true},
    scene: [SceneA]
}

const game = new Phaser.Game(config);

function getFormData(form) {
    return Object.fromEntries(new FormData(form));
}

function validateFormData(formData) {
    return Object.values(formData).every(v=> v.trim());
}