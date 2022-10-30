import { Module } from "@/core/module";
import App from "./components/App";
import "./index.css";

export class Paint extends Module {
  constructor() {
    super("paint", "Рисовать");
  }

  trigger() {
    const paint = new App();
  }
}
