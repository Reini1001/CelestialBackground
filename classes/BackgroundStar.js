class BackgroundStar extends Object_AbstractClass  {

    constructor(x, y, color) {
        super(x, y, color);
        this.speed = Math.random();
    }

    update() {
        this.x -= this.speed;
        if (this.x <= 0) {
            this.x += game.canvasHandler.getWidth() - 1;
        }
    }
    draw() {
        if ((timing % Math.floor(Math.random() * 500) === 0) && bgSF === true) {
            super.draw(0);
        }
        else {
            super.draw(1);
        }
    }
}