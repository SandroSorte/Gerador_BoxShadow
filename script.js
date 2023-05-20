class boxshadowgenerator {

    constructor(
        horizontal,
        horizontalref,
        vertical,
        verticalref,
        blur,
        blurref,
        spread,
        spreadref,
        previewbox,
    ) {
        this.horizontal = horizontal;
        this.horizontalref = horizontalref;
        this.vertical = vertical;
        this.verticalref = verticalref;
        this.blur = blur;
        this.blurref = blurref;
        this.spread = spread;
        this.spreadref = spreadref;
        this.previewbox = previewbox;

    }
    initializer() {
        this.horizontalref.value = this.horizontal.value;
        this.verticalref.value = this.vertical.value;
        this.blurref.value = this.blur.value;
        this.spreadref.value = this.spread.value;

        this.applyRule()
    }

    applyRule() {
        this.previewbox.style.boxshadow = `${this.horizontalref.value}px ${this.verticalref.value}px ${this.blurref.value}px ${this.spreadref.value}px #000000`;
    }
}



//selectores

const horizontal = document.querySelector("#horizontal")
const horizontalref = document.querySelector("#horizontal-value")
const vertical = document.querySelector("#vertical")
const verticalref = document.querySelector("#vertical-value")
const blur = document.querySelector("#blur")
const blurref = document.querySelector("#blur-value")
const spread = document.querySelector("#spread")
const spreadref = document.querySelector("#spread-value")
const previewbox = document.querySelector("#box")

const boxshadow = new boxshadowgenerator(
    horizontal,
    horizontalref,
    vertical,
    verticalref,
    blur,
    blurref,
    spread,
    spreadref,
    previewbox,
)
boxshadow.initializer()