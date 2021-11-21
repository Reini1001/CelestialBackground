class CelestialBody_AbstractClass extends Object_AbstractClass {

    constructor(x, y, velocityX, velocityY, size, mass, color, collision = true) {
        super(x, y, color);
        this.id = program.objectHandler.getNewID();
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.size = size;
        this.mass = mass;
        this.collision = collision;
        program.objectHandler.addObject(this);
    }

    update() {
        super.update();
    }

    draw() {
        super.draw(this.size);
    }

    destroy() {
        program.objectHandler.removeObject(this);
    }

    updateVelocity() {
        program.objectHandler.getObjects().forEach((object) => {
            if (object !== this) {
                let deltaX = object.x - this.x;
                let deltaY = object.y - this.y;
                let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                if (distance > this.size + object.size) {
                    let force = G * ((this.mass * object.mass) / Math.pow(distance, 2));
                    let direction = Math.atan2(deltaY, deltaX);
                    this.accelerationX = force * Math.cos(direction) / this.mass;
                    this.accelerationY = force * Math.sin(direction) / this.mass;
                    this.velocityX += this.accelerationX;
                    this.velocityY += this.accelerationY;
                }
            }
        });
    }

    updatePosition() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    checkBorder() {
        if (this.y < 0 + this.size || this.y > program.canvasHandler.getHeight() - this.size) {
            this.velocityY = -this.velocityY;
        }
        if (this.x < 0 + this.size || this.x > program.canvasHandler.getWidth() - this.size) {
            this.velocityX = -this.velocityX;
        }
    }

    checkCollision() {
        program.objectHandler.getObjects().forEach((object) => {
            if (object !== this && this.collision && object.collision) {
                let deltaX = object.x - this.x;
                let deltaY = object.y - this.y;
                let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                if (distance < this.size + object.size) {
                    if (this.mass >= object.mass) {
                        this.mass += (object.mass * 0.8);
                        this.size += (object.size * 0.8);
                        this.color.mix(object.color);
                        object.destroy();
                    } else {
                        object.mass += (this.mass * 0.8);
                        object.size += (this.size * 0.8);
                        object.color.mix(this.color);
                        this.destroy();
                    }
                }
            }
        });
    }
}