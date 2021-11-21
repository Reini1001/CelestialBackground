class ObjectHandler {
    constructor() {
        this.background = {};
        this.objects = [];
        this.nextId = 0;
    }

    update() {
        if (this.objects.length <= 2) {
            program.restart();
        }
        program.wallpaperPropertyHandler.update();
        this.background.update();
        this.objects.forEach((object) => {
            object.updateVelocity();
        });
        this.objects.forEach((object) => {
            object.update();
        });
    }

    draw() {
        program.canvasHandler.clearCanvas();
        this.background.draw();
        this.objects.forEach(object => {
            object.draw()
        });
    }

    getObjects() {
        return this.objects;
    }

    getObject(id) {
        return this.objects.filter(object => object.id = id);
    }

    getNewID() {
        let out = this.nextId;
        this.nextId++;
        return out;
    }

    setBackground(background) {
        this.background = background;
    }

    addObject(object) {
        this.objects.push(object);
    }

    removeObject(object) {
        this.objects.splice(this.objects.indexOf(object), 1);
    }
}