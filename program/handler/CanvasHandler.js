class CanvasHandler {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = document.getElementById("body").clientWidth;
        this.canvas.height = document.getElementById("body").clientHeight;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.getElementById("body").childNodes[0]);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getCtx() {
        return this.ctx;
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }
}

function getRandomPosition() {
    let x = program.canvasHandler.getWidth() * Math.random();
    let y = program.canvasHandler.getHeight() * Math.random();
    return {x, y};
}