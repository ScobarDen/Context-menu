import { Module } from "@/core/module";
import { getRandomColor } from "@/utils";

export class BackgroundModule extends Module {
  constructor() {
    super("background", "Сменить цвет");
  }

  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}
