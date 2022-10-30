import { Module } from "@/core/module";

export class ClicksModule extends Module {
  constructor(seconds) {
    super("clicks", "Количество кликов");
    this.clicks = 0;
    this.initialTime = seconds;
    this.time = seconds;
    this.title = this.createTitle();
    this.interval = null;
    this.timeout = null;
  }

  clickHandler = (evt) => {
    if (evt.button === 0) {
      this.clicks++;
    }
  };

  removeListener = () => {
    this.updateTitle(`Ты кликнул мышкой ${this.clicks} раз(а)!`);
    document.body.removeEventListener("click", this.clickHandler);
  };

  updateTitle = (text) => {
    this.title.textContent = text;
  };

  reset = () => {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    this.clicks = -1;
    this.time = this.initialTime;
  };
  createTitle = () => {
    const title = document.createElement("h1");
    title.className = "title";
    return title;
  };
  showClicks = () => {
    this.updateTitle(`Кликай быстрее осталось ${this.time} секунд(а)!`);
  };

  updateClicks = () => {
    this.time--;
    if (this.time > 0) {
      this.showClicks();
    }
  };

  trigger = () => {
    this.reset();
    this.showClicks();
    document.body.append(this.title);
    document.body.addEventListener("click", this.clickHandler);
    this.interval = setInterval(this.updateClicks, 1000);
    this.timeout = setTimeout(() => this.removeListener(), 5000);
  };
}
