class ObjectHandler{
    constructor () {
        this.background = {};
        this.objects = [];
        this.nextId = 0;
    }

    update () {
        if (debug) {
            trails = true;
            bgSF = true;
        }
        else {
            window.wallpaperPropertyListener = {
                applyUserProperties: function (properties) {
                    if (properties.trails) {
                        trails = properties.trails.value
                    }
                    if (properties.bgsf) {
                        bgSF = properties.bgsf.value
                    }
                }
            }
        }
        this.background.update();
        this.objects.forEach((object) => { object.updateVelocity(); });
        this.objects.forEach((object) => { object.update(); });

        timing++;
        if (timing >= 1001) {
            timing = 0;
        }
    }
    draw () {
        game.canvasHandler.clearCanvas();
        this.background.draw();
        this.objects.forEach(object => object.draw());
    }

    getObjects () {
        return this.objects;
    }
    getObject (id) {
        return this.objects.filter(object => object.id = id);
    }

    getNewID() {
        let out = this.nextId;
        this.nextId++;
        return out;
    }

    setBackground (background) {
        this.background = background;
    }

    addObject (object) {
        this.objects.push(object);
    }
    removeObject (object) {
        this.objects.splice(this.objects.indexOf(object), 1);
    }
}