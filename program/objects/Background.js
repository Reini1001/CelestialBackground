class Background {

    constructor(number) {
        this.backgroundObjects = [];
        for (let i = 0; i < number; i++) {
            let ranPos = getRandomPosition();
            this.backgroundObjects.push(new BackgroundStar(ranPos.x, ranPos.y, new Color(255, 255, 255)));
        }
    }

    update() {
        this.backgroundObjects.forEach(object => object.update());
    }

    draw() {
        this.backgroundObjects.forEach(object => object.draw());
    }
}