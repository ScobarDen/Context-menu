import { Module } from "../core/module";
import { deleteRandomFigures } from "@/utils";

export class DeleteRandomFigure extends Module {
  constructor() {
    super("Deletefigure", "Удалить рандомные фигуры");
  }

  trigger() {
    deleteRandomFigures();
  }
}
