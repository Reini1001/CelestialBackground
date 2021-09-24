let game = {}

game.canvasHandler = new CanvasHandler();
game.objectHandler = new ObjectHandler(game.canvasHandler.getCtx());

game.runtime = new Runtime(120);


function startGame() {
    game.objectHandler.setBackground(new Background(250));

    new Sun(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2, 12, 5000, new Color(255, 175, 0));
    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 + planetStartDistends, -planetStartVelocity, 0, 5,200, new Color(255, 0, 0));

    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 + planetStartDistends - 50, -planetStartVelocity - 0.6, 0, 3,5, new Color(155, 155, 0));

    new Planet(game.canvasHandler.getWidth() / 2 + planetStartDistends, game.canvasHandler.getHeight() / 2, 0, planetStartVelocity, 5, 200, new Color(0, 255, 0));
    new Planet(game.canvasHandler.getWidth() / 2, game.canvasHandler.getHeight() / 2 - planetStartDistends, planetStartVelocity, 0, 5, 200, new Color(0, 0, 255));
    new Planet(game.canvasHandler.getWidth() / 2 - planetStartDistends, game.canvasHandler.getHeight() / 2, 0, -planetStartVelocity, 5, 200, new Color(255, 0, 255));

    window.requestAnimationFrame(game.runtime.run);
}



















