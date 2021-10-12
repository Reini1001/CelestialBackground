class Planet extends CelestialBody {

    constructor(x, y, velocityX, velocityY, size, mass, color, trailLength = 0) {
        super(x, y, velocityX, velocityY, size, mass, color);
        this.trail = new Trail(this.size, this.color, trailLength);
    }

    update() {
        super.update();
        this.updatePosition();
        this.checkCollision();
        this.checkBorder();
        if (trails === true) {
            this.trail.update(this.x, this.y, this.size, this.color);
        }
        else {
            this.trail.clear();
        }
    }
    draw() {
        if (trails === true) {
            this.trail.draw();
        }
        super.draw();
    }
}