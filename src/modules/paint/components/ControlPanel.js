import Colors from "./Colors.js";
import Tools from "./Tools.js";
import { createElement } from "../common/utils.js";
import ClearButton from "./ClearButton";
import CurrentColor from "./CurrentColor";
import SaveButton from "./SaveButton";

export default class ControlPanel {
  #panel;
  #colors;
  #range;
  #clearButton;
  #currentColor;
  #changeColor;
  #saveButton;
  #buttons;
  constructor(
    parentNode,
    changeColor,
    changeBrushWidth,
    clearCanvas,
    saveImageCanvas
  ) {
    this.#changeColor = changeColor;
    this.#panel = createElement("div", "control-panel");
    this.#currentColor = new CurrentColor(this.#panel);
    this.#colors = new Colors(this.#panel, this.#changeCurrentColor);
    this.#range = new Tools(this.#panel, changeBrushWidth);
    this.#buttons = createElement("div", "buttons");
    this.#clearButton = new ClearButton(this.#buttons, clearCanvas);
    this.#saveButton = new SaveButton(this.#buttons, saveImageCanvas);
    this.#panel.append(this.#buttons);
    parentNode.append(this.#panel);
  }
  #changeCurrentColor = (index) => {
    this.#changeColor(index);
    this.#currentColor.changeColor(index);
  };
}
