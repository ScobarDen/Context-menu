import { Module } from "../core/module";
import { createModal } from "@/utils";

export class ChooseFigure extends Module {
  constructor() {
    super("ChooseFigure", "Нарисовать  фигуру");
  }

  trigger() {
    const checkModalInBody = document.querySelector(".modalFigure");
    if (checkModalInBody) {
      checkModalInBody.remove();
    }
    document.body.append(createModal());
  }
}
