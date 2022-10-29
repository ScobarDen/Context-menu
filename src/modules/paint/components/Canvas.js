import { createElement } from "../common/utils.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLORS } from "../common/constants.js";

export default class Canvas {
  #canvas;
  #context;
  #mouseX;
  #mouseY;
  constructor(parentNode) {
    this.#canvas = this.#createCanvas(parentNode, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.#context = this.#canvas.getContext("2d");
    this.#context.fillStyle = "rgb(255,255,255)";
    this.#context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.isCLickOnCanvas = false;
    this.#mouseX = 0;
    this.#mouseY = 0;
  }

  #createCanvas = (parentNode, width, height) => {
    const canvas = createElement("canvas", "canvas");
    canvas.width = width;
    canvas.height = height;
    parentNode.append(canvas);
    return canvas;
  };

  drawLine = (colorIndex, brushWidth) => {
    this.#context.strokeStyle = COLORS[colorIndex];
    this.#context.lineWidth = brushWidth;
    this.#context.lineCap = "round";

    this.#canvas.onmousemove = (evt) => {
      if (evt.buttons === 1 && this.isCLickOnCanvas) {
        this.#context.lineTo(evt.offsetX, evt.offsetY);
        this.#context.stroke();
      }
    };

    this.#canvas.onmouseup = (evt) => {
      if (evt.buttons === 1) {
        this.#context.closePath();
        this.isCLickOnCanvas = false;
      }
    };

    this.#canvas.onmousedown = (evt) => {
      if (evt.buttons === 1) {
        this.#context.beginPath();
        this.isCLickOnCanvas = true;
      }
    };

    this.#canvas.onmouseleave = (evt) => {
      if (evt.buttons === 1) {
        this.#context.closePath();
        this.isCLickOnCanvas = false;
      }
    };
  };

  clearCanvas = () => {
    this.#context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };

  saveImage = () => {
    const imageData = this.#canvas.toDataURL("image/jpeg", 1.0);
    const image = new Image();
    image.src = imageData;
    const link = document.createElement("a");
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
  };
}
