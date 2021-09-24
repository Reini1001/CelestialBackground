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
        game.canvasHandler.getCtx().strokeStyle = this.borderColor.getColorString();
        game.canvasHandler.getCtx().lineWidth = 1;
        game.canvasHandler.getCtx().beginPath();
        game.canvasHandler.getCtx().arc(this.x, this.y, size, 0, 2 * Math.PI);
        game.canvasHandler.getCtx().stroke();
        game.canvasHandler.getCtx().fillStyle = this.color.getColorString();
        game.canvasHandler.getCtx().fill();
    }
}