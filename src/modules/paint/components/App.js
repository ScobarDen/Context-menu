import ControlPanel from "./ControlPanel.js";
import Canvas from "./Canvas.js";

import { createElement } from "../common/utils";

import {
  INITIAL_BRUSH_WIDTH,
  INITIAL_INDEX_COLOR,
} from "../common/constants.js";
import Tools from "./Tools";

export default class App {
  #canvas;
  #colorIndex;
  #brushSize;
  #controlPanel;
  #modal;
  #modalContent;
  #tool;
  #tools;

  constructor() {
    this.#modal = document.querySelector(".modal");
    this.#modalContent = this.#modal.querySelector(".modal-content");
    this.#showModal();
    this.#colorIndex = INITIAL_INDEX_COLOR;
    this.#brushSize = INITIAL_BRUSH_WIDTH;
    this.#controlPanel = new ControlPanel(
      this.#modalContent,
      this.#changeColor,
      this.#changeBrushWidth,
      this.#clearCanvas,
      this.#saveImageCanvas
    );
    this.#tools = new Tools(this.#modalContent, this.#changeTool);
    this.#canvas = new Canvas(this.#modalContent);
    this.#tool = "brush";
    this.#draw();
  }

  #changeColor = (index) => {
    this.#colorIndex = index;
    this.#draw();
  };

  #changeBrushWidth = (size) => {
    this.#brushSize = size;
    this.#draw();
  };

  #drawLine = () => {
    this.#canvas.drawLine(this.#colorIndex, this.#brushSize);
  };

  #drawRect = () => {
    this.#canvas.drawRect(this.#colorIndex, this.#brushSize);
  };

  #drawEllipse = () => {
    console.log("ellipse");
    this.#canvas.drawEllipse(this.#colorIndex, this.#brushSize);
  };

  #draw = () => {
    if (this.#tool === "brush") {
      this.#drawLine();
    } else if (this.#tool === "rect") {
      this.#drawRect();
    } else if (this.#tool === "ellipse") {
      this.#drawEllipse();
    }
  };

  #changeTool = (toolName) => {
    this.#tool = toolName;
    this.#draw();
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
    this.#modal.onclick = this.#clickModalHandler;
    this.#modalContent.append(btn);
    return btn;
  };

  #showModal = () => {
    this.#modalContent.innerHTML = "";
    this.btnClose = this.#createBtnClose();
    this.#modal.style.display = "block";
  };

  #clickCloseHandler = () => {
    this.#closeModal();
  };

  #clickModalHandler = (e) => {
    if (e.target === this.#modal) {
      this.#closeModal();
    }
  };

  #closeModal = () => {
    this.#modal.style.display = "none";
  };
}
