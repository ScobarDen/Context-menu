import { createElement } from "../common/utils";

export default class ClearButton {
    #button;
    constructor(parentNode, clearCanvas) {
        this.#button = createElement("button", "clear-button", "Очистить");
        this.#button.onclick = () => clearCanvas();
        parentNode.append(this.#button);
    }
}
