export class Creature {
    constructor() {
        this.scene = null;
        this.char = null;
        this.speed = 1.5;
        this.dest = {
            x: 0,
            y: 0
        };
        this.sprite = null;
    }

    createSprite(config = {}) {
        const x = config.x || this.dest.x || 400;
        const y = config.y || this.dest.y || 300;
        this.dest.x = x;
        this.dest.y = y;
        this.sprite = config.key;
        if(this.scene && config.key) {
            this.char = (config.static) ? this.scene.physics.add.staticSprite(x,y, config.key)
            : this.scene.physics.add.sprite(x,y, config.key);
        }
    }

    setScene(scene) {
        if(scene) this.scene = scene;
    }

    moveToDest() {
        if(this.dest && this.char) {
            const xDist = this.char.x - this.dest.x;
            const yDist = this.char.y - this.dest.y;
            if(Math.abs(xDist) > 5 || Math.abs(yDist) > 5) {
                this.char.x += (Math.abs(xDist) < 5) ? 0 : (xDist > 0) ? -this.speed : this.speed;
                this.char.y += (Math.abs(yDist) < 5) ? 0 : (yDist > 0) ? -this.speed : this.speed;
                this.char.flipX = (xDist > 0);
                try { this.char.play(`${this.sprite} walk`, true); }
                catch{}
            }
            else {
                this.dest = null;
                try { this.char.play(`${this.sprite} idle`, true); }
                catch{}
            }
        }
    }

    setDest(coords) {
        if(coords) this.dest = coords;
    }
}