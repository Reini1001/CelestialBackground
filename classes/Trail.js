class Trail extends Object_AbstractClass  {

    constructor(size, color, length) {
        let colorVal = color.getColorValues();
        super(0, 0, new Color(colorVal.r, colorVal.g, colorVal.b));
        this.length = length;
        this.size = size;
        this.altPoss = [];
    }

    update(x, y, size, color) {
        let colorVal = color.getColorValues();
        this.size = size;
        this.color = new Color(colorVal.r, colorVal.g, colorVal.b);
        this.borderColor = new Color(colorVal.r, colorVal.g, colorVal.b);
        this.addPos(x, y);
        if (this.altPoss.length > this.length) {
            this.altPoss.splice(0, this.altPoss.length - this.length);
        }
    }

    draw() {
        for (let i = 0; i < this.altPoss.length - 3; i++) {
            this.x = this.altPoss[i].x;
            this.y = this.altPoss[i].y;
            this.color.setAlpha((0.2 / this.length) * i);
            this.borderColor.setAlpha((0.2 / this.length) * i);
            super.draw(this.size);
        }
    }

    addPos(x, y) {
        this.altPoss.push({ x: x, y: y });
    }

    clear () {
        this.altPoss = [];
    }

}