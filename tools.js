const G = 1;
const debug = true;

const moonStartDistendsAdd = 30;
const planetStartVelocity = 3.6;
const moonStartVelocityAdd = 2.8;

let planetStartDistends;
let sunStartDistends;

let trails = true;
let bgSF = true;
let fps = 120;

let timing = 0;

let game = {}

function getRandomPosition() {
    let x = game.canvasHandler.getWidth() * Math.random();
    let y = game.canvasHandler.getHeight() * Math.random();
    return { x, y };
}