import { createElement } from "../common/utils.js";
import { COLORS, INITIAL_INDEX_COLOR } from "../common/constants.js";

export default class Colors {
  #colorIndex;
  #panel;
  #changeColor;
  #colorButtons;
  constructor(parentNode, changeColor) {
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#panel = createElement("div", "color-panel");
    this.#changeColor = changeColor;
    this.#colorButtons = this.#createColorButtons();
    parentNode.append(this.#panel);
  }

  #buttonClickHandler = (i) => {
    this.#panel.innerHTML = "";
    this.#changeColor(i);
    this.#colorIndex = i;
    this.#colorButtons = this.#createColorButtons();
  };

  #createColorButtons = () => {
    const colorButtons = COLORS.map((color, i) => {
      const button = createElement("button", "color-button");
      button.style.backgroundColor = color;
      button.onclick = () => this.#buttonClickHandler(i);
      return button;
    });
    this.#panel.append(...colorButtons);
    return colorButtons;
  };
}
