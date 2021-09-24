const G = 0.1;
const debug = true;

let planetStartDistends;
let sunStartDistends;
let planetStartVelocity = 1.2;

let trails;
let bgSF;
let fps;

let timing = 0;

function getRandomPosition() {
    let x = game.canvasHandler.getWidth() * Math.random();
    let y = game.canvasHandler.getHeight() * Math.random();
    return { x, y };
}

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