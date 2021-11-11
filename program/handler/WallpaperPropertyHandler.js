class WallpaperProperty {
    constructor() {
        this.update();
    }
    update () {
        window.wallpaperPropertyListener = {
            applyUserProperties: function (properties) {
                if (properties.trails) {
                    program.settings.trails = properties.trails.value
                }
                if (properties.bgsf) {
                    program.settings.bgSF = properties.bgsf.value
                }
            },
            applyGeneralProperties: function (properties) {
                if (properties.fps) {
                    program.settings.fps = properties.fps;
                }
            }
        }
    }
}