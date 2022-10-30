import ControlPanel from "./ControlPanel.js";
import Canvas from "./Canvas.js";

import {
  INITIAL_BRUSH_WIDTH,
  INITIAL_INDEX_COLOR,
} from "../common/constants.js";
import { createElement } from "@/modules/paint/common/utils";

export default class App {
  #canvas;
  #colorIndex;
  #brushSize;
  #controlPanel;

  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalContent = this.modal.querySelector(".modal-content");
    this.#showModal();
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#brushSize = INITIAL_BRUSH_WIDTH;
    this.#controlPanel = new ControlPanel(
      this.modalContent,
      this.#changeColor,
      this.#changeBrushWidth,
      this.#clearCanvas,
      this.#saveImageCanvas
    );
    this.#canvas = new Canvas(this.modalContent);
    this.#drawLine();
  }

  #changeColor = (index) => {
    this.#colorIndex = index;
    this.#drawLine();
  };

  #changeBrushWidth = (size) => {
    this.#brushSize = size;
    this.#drawLine();
  };

  #drawLine = () => {
    this.#canvas.drawLine(this.#colorIndex, this.#brushSize);
  };

  #clearCanvas = () => {
    this.#canvas.clearCanvas();
  };

  #saveImageCanvas = () => {
    this.#canvas.saveImage();
  };

  #createBtnClose = () => {
    const btn = createElement("span", "close", "x");
    btn.onclick = this.#clickCloseHandler;
    this.modal.onclick = this.#clickModalHandler;
    this.modalContent.append(btn);
    return btn;
  };

  #showModal = () => {
    this.modalContent.innerHTML = "";
    this.btnClose = this.#createBtnClose();
    this.modal.style.display = "block";
  };

  #clickCloseHandler = () => {
    this.#closeModal();
  };

  #clickModalHandler = (e) => {
    if (e.target === this.modal) {
      this.#closeModal();
    }
  };

  #closeModal = () => {
    this.modal.style.display = "none";
  };
}
