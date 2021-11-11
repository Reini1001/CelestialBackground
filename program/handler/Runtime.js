class Runtime {
    constructor(fps) {
        this.tps = 60;
        this.fps = fps;
        this.lastTick = performance.now() / 1000;
        this.tpsThreshold = 0;
        this.lastFrame = performance.now() / 1000;
        this.fpsThreshold = 0;
    }

    run() {
        window.requestAnimationFrame(program.runtime.run);

        let now = performance.now() / 1000;
        let dt = Math.min(now - program.runtime.getLastTick(), 1);
        program.runtime.setLastTick(now);

        if (program.runtime.getTps() > 0) {
            program.runtime.setTpsThreshold(program.runtime.getTpsThreshold() + dt);
            if (program.runtime.getTpsThreshold() > 1.0 / program.runtime.getTps()) {
                program.runtime.setTpsThreshold(program.runtime.getTpsThreshold() - 1.0 / program.runtime.getTps());
                program.objectHandler.update();
            }
        }

        dt = Math.min(now - program.runtime.getLastFrame(), 1);
        program.runtime.setLastFrame(now);

        if (program.runtime.getFps() > 0) {
            program.runtime.setFpsThreshold(program.runtime.getFpsThreshold() + dt);
            if (program.runtime.getFpsThreshold() > 1.0 / program.runtime.getFps()) {
                program.runtime.setFpsThreshold(program.runtime.getFpsThreshold() - 1.0 / program.runtime.getFps())
                program.objectHandler.draw();
            }
        }
    }

    getLastTick() {
        return this.lastTick;
    }

    getTps() {
        return this.tps;
    }

    getTpsThreshold() {
        return this.tpsThreshold;
    }

    getLastFrame() {
        return this.lastFrame;
    }

    getFps() {
        return this.fps;
    }

    getFpsThreshold() {
        return this.fpsThreshold;
    }

    setLastTick(value) {
        this.lastTick = value;
    }

    setTpsThreshold(value) {
        this.tpsThreshold = value
    }

    setLastFrame(value) {
        this.lastFrame = value;
    }

    setFpsThreshold(value) {
        this.fpsThreshold = value;
    }
}