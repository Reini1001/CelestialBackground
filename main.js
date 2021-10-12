function setupGame () {
    window.wallpaperPropertyListener = {
        applyUserProperties: function (properties) {
            if (properties.trails) {
                trails = properties.trails.value
            }
            if (properties.bgsf) {
                bgSF = properties.bgsf.value
            }
        },
        applyGeneralProperties: function(properties) {
            if (properties.fps) {
                fps = properties.fps;
            }
        }
    }
    game = {};

    game.canvasHandler = new CanvasHandler();
    game.objectHandler = new ObjectHandler(game.canvasHandler.getCtx());
    game.runtime = new Runtime(fps);
}

function startGame() {
    setupGame()

    game.objectHandler.setBackground(new Background(250));

    new Sun(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2, 18, 5000, new Color(255, 175, 0));

    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 + planetStartDistends, -planetStartVelocity, 0, 7,200, new Color(255, 0, 0), 50);
    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 + planetStartDistends - moonStartDistendsAdd, -planetStartVelocity - moonStartVelocityAdd, 0, 4,3, new Color(255, 0, 0), 25);

    new Planet(game.canvasHandler.getWidth() / 2 + planetStartDistends, game.canvasHandler.getHeight() / 2, 0, planetStartVelocity, 7, 200, new Color(0, 255, 0), 50);
    new Planet(game.canvasHandler.getWidth() / 2 + planetStartDistends - moonStartDistendsAdd, game.canvasHandler.getHeight() / 2, 0, planetStartVelocity + moonStartVelocityAdd, 4, 3, new Color(0, 255, 0), 25);

    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 - planetStartDistends, planetStartVelocity, 0, 7, 200, new Color(0, 0, 255), 50);
    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 - planetStartDistends + moonStartDistendsAdd, planetStartVelocity + moonStartVelocityAdd, 0, 4, 3, new Color(0, 0, 255), 25);

    new Planet(game.canvasHandler.getWidth() / 2 - planetStartDistends, game.canvasHandler.getHeight() / 2, 0, -planetStartVelocity, 7, 200, new Color(255, 0, 255), 50);
    new Planet(game.canvasHandler.getWidth() / 2 - planetStartDistends + moonStartDistendsAdd, game.canvasHandler.getHeight() / 2, 0, -planetStartVelocity - moonStartVelocityAdd, 4, 3, new Color(255, 0, 255), 25);

    window.requestAnimationFrame(game.runtime.run);
}



















