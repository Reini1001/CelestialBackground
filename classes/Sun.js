class Sun extends CelestialBody {

    constructor(x, y, size, mass, color) {
        super(x, y, 0, 0, size, mass, color);
    }

    update() {
        super.update()
        this.updatePosition();
        this.checkCollision();
        this.checkBorder();
    }
    draw() {
        super.draw();
    }
}