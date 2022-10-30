import { Module } from "@/core/module";

const modulesFor = {
  timer: null,
  timerWrapper: null,
  button: null,
  cross: null,
  time: {
    hours: "00",
    minutes: "00",
    seconds: "00",
    allSeconds: "00",
  },
};
let timerId = null;
let isPlay = false;

const countdownTimer = () => {
  const hours =
    modulesFor.time.allSeconds > 0
      ? Math.floor(modulesFor.time.allSeconds / 60 / 60) % 24
      : 0;
  const minutes =
    modulesFor.time.allSeconds > 0
      ? Math.floor(modulesFor.time.allSeconds / 60) % 60
      : 0;
  const seconds =
    modulesFor.time.allSeconds > 0
      ? Math.floor(modulesFor.time.allSeconds) % 60
      : 0;
  modulesFor.timer[0].value = hours < 10 ? "0" + hours : hours;
  modulesFor.timer[1].value = minutes < 10 ? "0" + minutes : minutes;
  modulesFor.timer[2].value = seconds < 10 ? "0" + seconds : seconds;
  if (modulesFor.time.allSeconds <= 0) {
    modulesFor.message.classList.add("open");
    clearInterval(timerId);
    modulesFor.timer.forEach((element, index) => {
      element.removeAttribute("disabled");
      modulesFor.timer[index].value = "";
    });
    modulesFor.time.hours = "00";
    modulesFor.time.minutes = "00";
    modulesFor.time.seconds = "00";
    modulesFor.time.allSeconds = 0;
    setTimeout(() => {
      modulesFor.timerWrapper.classList.remove("open");
      modulesFor.message.classList.remove("open");
      modulesFor.button.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }, 1500);
  }
  modulesFor.time.allSeconds--;
};

const startTimer = ({ hours, minutes, seconds }) => {
  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);
  modulesFor.time.allSeconds = hours * 3600 + minutes * 60 + seconds;
  timerId = setInterval(countdownTimer, 1000);
};

export class TimerModule extends Module {
  #container;
  #wrapper;
  #col = [];
  #timer = [];
  #label = [];
  #button;
  #buttonReset;
  #message;
  #cross;
  #buttonContainer;

  constructor() {
    super("timer", "Таймер");
    this.#wrapper = document.createElement("div");
    this.#wrapper.className = "timer-wrapper";
    this.#container = document.createElement("div");
    this.#container.className = "timer-container";
    const time = ["hours", "minutes", "seconds"];
    for (let i = 0; i < 3; i++) {
      this.#col[i] = document.createElement("div");
      this.#col[i].className = "timer-col";
      this.#timer[i] = document.createElement("input");
      this.#timer[i].classList.add("timer-timer", `timer-${time[i]}`);
      this.#timer[i].dataset.type = `${time[i]}`;
      this.#timer[i].placeholder = "00";
      this.#timer[i].type = "number";
      this.#label[i] = document.createElement("p");
      this.#label[i].className = "timer-label";
      this.#label[i].textContent = time[i];

      this.#col[i].append(this.#timer[i], this.#label[i]);
    }
    modulesFor.timer = this.#timer;
    modulesFor.timerWrapper = this.#wrapper;
    this.#buttonContainer = document.createElement("div");
    this.#button = document.createElement("button");
    modulesFor.button = this.#button;
    this.#button.className = "timer-button";
    this.#button.innerHTML = `<i class="fa-solid fa-play"></i>`;
    this.#button.setAttribute("disabled", "");
    this.#buttonReset = document.createElement("button");
    modulesFor.buttonReset = this.#buttonReset;
    this.#buttonReset.className = "timer-button";
    this.#buttonReset.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    this.#buttonContainer.append(this.#button, this.#buttonReset);
    this.#message = document.createElement("div");
    this.#message.className = "timer-message";
    this.#message.textContent = "Время вышло!";
    modulesFor.message = this.#message;
    this.#cross = document.createElement("button");
    this.#cross.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    this.#cross.className = "timer-cross";
    modulesFor.cross = this.#cross;
    this.#container.append(...this.#col);
    this.#wrapper.append(
      this.#container,
      this.#buttonContainer,
      this.#message,
      this.#cross
    );

    this.#button.addEventListener("click", this.#buttonHandler);
    this.#buttonReset.addEventListener("click", this.#buttonResetHandler);
    this.#timer.forEach((timer) =>
      timer.addEventListener("input", this.#inputHandler)
    );
    this.#cross.addEventListener("click", this.#crossHandler);
  }

  get timer() {
    return this.#wrapper;
  }

  trigger() {
    document.body.append(this.timer);
    setTimeout(() => this.#wrapper.classList.add("open"), 0);
  }

  #buttonHandler() {
    if (isPlay) {
      clearInterval(timerId);
      isPlay = false;
      modulesFor.button.innerHTML = `<i class="fa-solid fa-play"></i>`;
      modulesFor.time.hours = modulesFor.timer[0].value;
      modulesFor.time.minutes = modulesFor.timer[1].value;
      modulesFor.time.seconds = modulesFor.timer[2].value;
    } else {
      modulesFor.button.innerHTML = `<i class="fa-solid fa-stop"></i>`;
      modulesFor.timer.forEach((element) =>
        element.setAttribute("disabled", "")
      );
      startTimer(modulesFor.time);
      isPlay = true;
    }
  }

  #inputHandler(e) {
    modulesFor.button.removeAttribute("disabled", "");
    const num = Number(e.target.value.trim());
    const type = e.target.dataset.type;
    if ((num >= 0 && num <= 60) || num === 0) {
      modulesFor.time[`${type}`] = num;
    } else {
      const index = modulesFor.timer.findIndex(
        (elem) => elem.dataset.type === type
      );
      modulesFor.timer[index].value = "";
    }
  }

  #crossHandler() {
    modulesFor.timerWrapper.classList.remove("open");
  }

  #buttonResetHandler() {
    modulesFor.button.innerHTML = `<i class="fa-solid fa-play"></i>`;
    isPlay = false;
    clearInterval(timerId);
    modulesFor.timer[0].value = "";
    modulesFor.timer[1].value = "";
    modulesFor.timer[2].value = "";
    modulesFor.time.hours = "";
    modulesFor.time.minutes = "";
    modulesFor.time.seconds = "";
    modulesFor.time.allSeconds = 0;
    modulesFor.timer.forEach((element) => element.removeAttribute("disabled"));
    modulesFor.button.setAttribute("disabled", "");
  }
}
