import { Module } from "@/core/module";
import { createModal } from "@/utils";

export class ChosenFigure extends Module {
  constructor() {
    super("chooseFigure", "Нарисовать  картинку");
  }

  trigger() {
    const checkModalInBody = document.querySelector(".modalFigure");
    if (checkModalInBody) {
      checkModalInBody.remove();
    }
    document.body.append(createModal());
  }
}
