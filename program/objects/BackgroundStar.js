class BackgroundStar extends Object_AbstractClass {

    constructor(x, y, color) {
        super(x, y, color);
        this.speed = Math.random();
        this.timing = 0;
    }

    update() {
        this.x -= this.speed;
        if (this.x <= 0) {
            this.x += program.canvasHandler.getWidth() - 1;
        }

        this.timing++;
        if (this.timing >= 1001) {
            this.timing = 0;
        }
    }

    draw() {
        if ((this.timing % Math.floor(Math.random() * 500) === 0) && program.settings.bgSF === true) {
            super.draw(0);
        } else {
            super.draw(1);
        }
    }
}