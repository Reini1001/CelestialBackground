class InputHandler {
    mouse = {
        one : 0,
        x : 0,
        y : 0
    };

    constructor() {
        // window.addEventListener('keydown', function (e) {
        //     program.inputHandler.keys = (program.inputHandler.keys || []);
        //     program.inputHandler.keys[e["keyCode"]] = true;
        //     if (debug) { console.debug(e["keyCode"], "Down")}
        // })
        // window.addEventListener('keyup', function (e) {
        //     program.inputHandler.keys[e["keyCode"]] = false;
        //     if (debug) { console.debug(e["keyCode"], "UP")}
        // })
        window.addEventListener("mousedown", function (e) {
            program.inputHandler.mouse = (program.inputHandler.mouse || []);
            program.inputHandler.mouse.one = 1;
            program.inputHandler.mouse.x = e.pageX;
            program.inputHandler.mouse.y = e.pageY;
            if (debug) { console.debug(e.pageX, e.pageY, "KLICK DOWN")}
        })
        window.addEventListener("mouseup", function () {
            program.inputHandler.mouse.one = 0;
            if (debug) { console.debug("KLICK UP")}
        })
        window.addEventListener("mousemove", function (e) {
            program.inputHandler.mouse = (program.inputHandler.mouse || []);
            program.inputHandler.mouse.x = e.pageX;
            program.inputHandler.mouse.y = e.pageY;
            if (debug) { console.debug(e.pageX, e.pageY, "MOUSE")}
        })
    }
}