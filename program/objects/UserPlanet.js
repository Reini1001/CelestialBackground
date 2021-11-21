class UserPlanet extends CelestialBody_AbstractClass {
    constructor() {
        super(0, 0, 0, 0, 10, 0, new Color(255, 255, 255, 0), false);
        this.borderColor.setAlpha(0);
    }

    update() {
        this.x = program.inputHandler.mouse.x;
        this.y = program.inputHandler.mouse.y;
        this.mass = 1000 * program.inputHandler.mouse.one;
        this.color.setAlpha(program.inputHandler.mouse.one * 0.25);
        super.update();
    }

    draw() {
        super.draw();
    }

    updateVelocity() {

    }
}