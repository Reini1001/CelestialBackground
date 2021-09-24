class Runtime {
    constructor(fps) {
        this.tps = 60;
        this.fps = fps;
        this.lastTick = performance.now() / 1000;
        this.tpsThreshold = 0;
        this.lastFrame = performance.now() / 1000;
        this.fpsThreshold = 0;
    }

    run () {
        window.requestAnimationFrame(game.runtime.run);

        let now = performance.now() / 1000;
        let dt = Math.min(now - game.runtime.getLastTick(), 1);
        game.runtime.setLastTick(now);

        if (game.runtime.getTps() > 0) {
            game.runtime.setTpsThreshold(game.runtime.getTpsThreshold() + dt);
            if (game.runtime.getTpsThreshold() > 1.0 / game.runtime.getTps()) {
                game.runtime.setTpsThreshold(game.runtime.getTpsThreshold() - 1.0 / game.runtime.getTps());
                game.objectHandler.update();
            }
        }

        dt = Math.min(now - game.runtime.getLastFrame(), 1);
        game.runtime.setLastFrame(now);

        if (game.runtime.getFps() > 0) {
            game.runtime.setFpsThreshold(game.runtime.getFpsThreshold() + dt);
            if (game.runtime.getFpsThreshold() > 1.0 / game.runtime.getFps()) {
                game.runtime.setFpsThreshold(game.runtime.getFpsThreshold() - 1.0 / game.runtime.getFps())
                game.objectHandler.draw();
            }
        }
    }

    getLastTick () {
        return this.lastTick;
    }
    getTps () {
        return this.tps;
    }
    getTpsThreshold () {
        return this.tpsThreshold;
    }
    getLastFrame () {
        return this.lastFrame;
    }
    getFps () {
        return this.fps;
    }
    getFpsThreshold () {
        return this.fpsThreshold;
    }

    setLastTick (value) {
        this.lastTick = value;
    }
    setTpsThreshold (value) {
        this.tpsThreshold = value
    }
    setLastFrame (value) {
        this.lastFrame = value;
    }
    setFpsThreshold (value) {
        this.fpsThreshold = value;
    }
}