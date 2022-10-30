import { Module } from "@/core/module";
import { getRandomFigure } from "@/utils";

export class RandomFigure extends Module {
  constructor() {
    super("figure", "Нарисовать рандомную фигуру");
  }

  trigger() {
    document.body.append(getRandomFigure());
  }
}
