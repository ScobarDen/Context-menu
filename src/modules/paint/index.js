import { Module } from "@/core/module";
import App from "./components/App";
import "./index.css";

export class Paint extends Module {
  constructor() {
    super("paint", "рисовать");
  }

  trigger() {
    const paint = new App();
  }
}
