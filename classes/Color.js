class Color {
    colorFix = false
    r;
    g;
    b;
    a;
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    mix(color) {
        if (!this.colorFix) {
            this.r = (this.r + color.r) / 2;
            this.g = (this.g + color.g) / 2;
            this.b = (this.b + color.b) / 2;
        }
    }
    getColorString() {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    }
    getColorValues() {
        return {r: this.r, g: this.g, b: this.b, a: this.a}
    }
    setColor(r, g, b, a = 100) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    setAlpha(a) {
        this.a = a;
    }
}