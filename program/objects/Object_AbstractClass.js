class Object_AbstractClass {

    constructor(x, y, color, borderColor = color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
    }

    update() {

    }

    draw(size) {
        program.canvasHandler.getCtx().strokeStyle = this.borderColor.getColorString();
        program.canvasHandler.getCtx().lineWidth = 1;
        program.canvasHandler.getCtx().beginPath();
        program.canvasHandler.getCtx().arc(this.x, this.y, size, 0, 2 * Math.PI);
        program.canvasHandler.getCtx().stroke();
        program.canvasHandler.getCtx().fillStyle = this.color.getColorString();
        program.canvasHandler.getCtx().fill();
    }
}