class Program {
    canvasHandler;
    objectHandler;
    inputHandler;
    wallpaperPropertyHandler;
    runtime;

    settings = {
        trails : true,
        bgSF : true,
        fps : 120
    };

    constructor() {
        this.inputHandler = new InputHandler();
        this.wallpaperPropertyHandler = new WallpaperProperty();
        this.canvasHandler = new CanvasHandler();
        this.objectHandler = new ObjectHandler();
        this.runtime = new Runtime(this.settings.fps);
    }
}