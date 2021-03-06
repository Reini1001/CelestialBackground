let program = {};

function startProgram() {
    program = new Program();

    program.setupInitial = function (planetStartDistends = 250, planetStartVelocity = 5, moonStartDistendsAdd = 50, moonStartVelocityAdd = 2) {
        program.objectHandler.setBackground(new Background(250));

        new UserPlanet();

        new Sun(program.canvasHandler.getWidth() / 2, program.canvasHandler.getHeight() / 2, 18, 5000, new Color(255, 175, 0));

        new Planet(program.canvasHandler.getWidth() / 2, program.canvasHandler.getHeight() / 2 + planetStartDistends, -planetStartVelocity, 0, 7, 200, new Color(255, 0, 0), 50);
        new Planet(program.canvasHandler.getWidth() / 2, program.canvasHandler.getHeight() / 2 + planetStartDistends - moonStartDistendsAdd, -planetStartVelocity - moonStartVelocityAdd, 0, 4, 3, new Color(255, 0, 0), 25);

        new Planet(program.canvasHandler.getWidth() / 2 + planetStartDistends, program.canvasHandler.getHeight() / 2, 0, planetStartVelocity, 7, 200, new Color(0, 255, 0), 50);
        new Planet(program.canvasHandler.getWidth() / 2 + planetStartDistends - moonStartDistendsAdd, program.canvasHandler.getHeight() / 2, 0, planetStartVelocity + moonStartVelocityAdd, 4, 3, new Color(0, 255, 0), 25);

        new Planet(program.canvasHandler.getWidth() / 2, program.canvasHandler.getHeight() / 2 - planetStartDistends, planetStartVelocity, 0, 7, 200, new Color(0, 0, 255), 50);
        new Planet(program.canvasHandler.getWidth() / 2, program.canvasHandler.getHeight() / 2 - planetStartDistends + moonStartDistendsAdd, planetStartVelocity + moonStartVelocityAdd, 0, 4, 3, new Color(0, 0, 255), 25);

        new Planet(program.canvasHandler.getWidth() / 2 - planetStartDistends, program.canvasHandler.getHeight() / 2, 0, -planetStartVelocity, 7, 200, new Color(255, 0, 255), 50);
        new Planet(program.canvasHandler.getWidth() / 2 - planetStartDistends + moonStartDistendsAdd, program.canvasHandler.getHeight() / 2, 0, -planetStartVelocity - moonStartVelocityAdd, 4, 3, new Color(255, 0, 255), 25);
    }

    program.start();
}



















