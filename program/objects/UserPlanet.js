class UserPlanet extends CelestialBody_AbstractClass {
    constructor() {
        super(0, 0, 0, 0, 0, 0,  new Color(1, 1, 1, 0), false);
    }

    update() {
        this.x = program.inputHandler.mouse.x;
        this.y = program.inputHandler.mouse.y;
        this.mass = 10000 * program.inputHandler.mouse.one;
        this.color.setAlpha(program.inputHandler.mouse.one);
        super.update();
    }

    draw() {
        super.draw(10);
    }

    updateVelocity() {

    }
}