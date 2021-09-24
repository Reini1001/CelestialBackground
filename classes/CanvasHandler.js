class CanvasHandler {
    constructor () {
        this.canvas = document.createElement("canvas");
        this.canvas.width = document.getElementById("game").clientWidth;
        this.canvas.height = document.getElementById("game").clientHeight;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.getElementById("game").childNodes[0]);

        planetStartDistends = this.canvas.height / 3;
        sunStartDistends = this.canvas.width / 4;
    }
    clearCanvas () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getCtx () {
        return this.ctx;
    }
    getWidth () {
        return this.canvas.width;
    }
    getHeight () {
        return this.canvas.height;
    }
}