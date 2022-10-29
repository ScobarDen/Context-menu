import { createElement } from "../common/utils";

export default class SaveButton {
    #button;
    constructor(parentNode, saveImageCanvas) {
        this.#button = createElement("button", "save-button", "Сохранить");
        this.#button.onclick = () => saveImageCanvas();
        parentNode.append(this.#button);
    }
}
