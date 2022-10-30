import { createElement } from "../common/utils.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLORS } from "../common/constants.js";

export default class Canvas {
  #canvas;
  #context;
  #mouseX;
  #mouseY;
  #tempCanvas;
  #tempContext;

  constructor(parentNode) {
    this.#canvas = this.#createCanvas(
      null,
      "canvas",
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    this.#context = this.#canvas.getContext("2d");
    this.#tempCanvas = this.#createCanvas(
      parentNode,
      "temp-canvas",
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    this.#tempContext = this.#tempCanvas.getContext("2d");
    this.clearCanvas();
    this.isCLickOnCanvas = false;
    this.#mouseX = 0;
    this.#mouseY = 0;
  }

  #createCanvas = (parentNode, className, width, height) => {
    const canvas = createElement("canvas", className);
    canvas.width = width;
    canvas.height = height;
    if (parentNode) {
      parentNode.append(canvas);
    }
    return canvas;
  };

  drawLine = (colorIndex, brushWidth) => {
    this.#tempContext.strokeStyle = COLORS[colorIndex];
    this.#tempContext.lineWidth = brushWidth;
    this.#tempContext.lineCap = "round";

    this.#tempCanvas.onmousemove = (evt) => {
      if (evt.buttons === 1 && this.isCLickOnCanvas) {
        this.#tempContext.lineTo(evt.offsetX, evt.offsetY);
        this.#tempContext.stroke();
      }
    };

    this.#tempCanvas.onmouseup = () => {
      this.#tempContext.closePath();
      this.#context.drawImage(
        this.#tempCanvas,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      this.isCLickOnCanvas = false;
    };

    this.#tempCanvas.onmousedown = (evt) => {
      this.#tempContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      this.#tempContext.drawImage(
        this.#canvas,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      this.#mouseX = evt.offsetX;
      this.#mouseY = evt.offsetY;
      this.#tempContext.beginPath();
      this.isCLickOnCanvas = true;
    };

    this.#tempCanvas.onmouseleave = () => {
      this.#tempContext.closePath();
      this.#context.drawImage(
        this.#tempCanvas,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      this.isCLickOnCanvas = false;
    };
  };

  drawRect = (colorIndex, brushWidth) => {
    this.#tempContext.strokeStyle = COLORS[colorIndex];
    this.#tempContext.lineWidth = brushWidth;

    this.#tempCanvas.onmousemove = (evt) => {
      if (evt.buttons === 1 && this.isCLickOnCanvas) {
        this.#tempContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.#tempContext.moveTo(this.#mouseX, this.#mouseY);
        this.#tempContext.drawImage(
          this.#canvas,
          0,
          0,
          CANVAS_WIDTH,
          CANVAS_HEIGHT
        );
        const x = Math.min(evt.offsetX, this.#mouseX);
        const y = Math.min(evt.offsetY, this.#mouseY);
        const width = Math.abs(evt.offsetX - this.#mouseX);
        const height = Math.abs(evt.offsetY - this.#mouseY);
        this.#tempContext.strokeRect(x, y, width, height);
      }
    };
  };

  clearCanvas = () => {
    this.#context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.#tempContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.#context.fillStyle = "rgb(255,255,255)";
    this.#context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.#tempContext.fillStyle = "rgb(255,255,255)";
    this.#tempContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
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
