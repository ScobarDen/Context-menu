import { createElement } from "../common/utils";
import { COLORS, INITIAL_INDEX_COLOR } from "../common/constants";

export default class CurrentColor {
    #currentColor;
    #title;
    #color;
    constructor(parentNode) {
        this.#currentColor = createElement("div", "current-color");
        this.#title = createElement("div", "current-color__title", "Текущий цвет");
        this.#color = createElement("div", "current-color__color");
        this.changeColor(INITIAL_INDEX_COLOR);
        this.#currentColor.append(this.#title, this.#color);
        parentNode.append(this.#currentColor);
    }

    changeColor = (index) => {
        this.#color.style.backgroundColor = COLORS[index];
    };
}
