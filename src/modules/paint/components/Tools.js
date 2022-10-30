import { createElement } from "../common/utils";

export default class Tools {
  #buttons;
  #line;
  #rect;
  #ellipse;
  constructor(parentNode, changeTool) {
    this.changeTool = changeTool;
    this.#buttons = createElement("div", "tools-buttons");
    this.#line = createElement("button", "line-button", "Кисть");
    this.#rect = createElement("button", "rect-button", "Прямоугольник");
    this.#ellipse = createElement("button", "ellipse-button", "Овал");
    this.#line.onclick = this.clickLineHandler;
    this.#rect.onclick = this.clickRectHandler;
    this.#ellipse.onclick = this.clickEllipseHandler;
    this.#line.classList.add("active");
    this.#buttons.append(this.#line, this.#rect, this.#ellipse);
    parentNode.append(this.#buttons);
  }

  clickLineHandler = () => {
    this.clearActiveButtons();
    this.#line.classList.add("active");
    this.changeTool("brush");
  };

  clickRectHandler = () => {
    this.clearActiveButtons();
    this.#rect.classList.add("active");
    this.changeTool("rect");
  };

  clickEllipseHandler = () => {
    this.clearActiveButtons();
    this.#ellipse.classList.add("active");
    this.changeTool("ellipse");
  };

  clearActiveButtons = () => {
    this.#line.classList.remove("active");
    this.#rect.classList.remove("active");
    this.#ellipse.classList.remove("active");
  };
}
