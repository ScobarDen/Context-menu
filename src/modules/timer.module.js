import {Module} from '../core/module';

export class TimerModule extends Module {
    #container;
    #wrapper;
    #col = [];
    #timer = [];
    #label = [];
    #button
    constructor() {
        super("timer","таймер");
        this.#wrapper = document.createElement("div");
        this.#wrapper.className = "timer-wrapper"
        this.#container = document.createElement('div');
        this.#container.className = 'timer-container';
        const time = ['hours','minutes','seconds'];
        for (let i = 0; i < 3; i++) {
            this.#col[i] = document.createElement('div');
            this.#col[i].className = 'timer-col';
            this.#timer[i] = document.createElement('p');
            this.#timer[i].classList.add('timer-timer',`timer-${time[i]}`);
            this.#label[i] = document.createElement('p');
            this.#label[i].className = 'timer-label';
            this.#label[i].textContent = time[i];

            this.#col[i].append(this.#timer[i],this.#label[i]);
        }
        this.#button = document.createElement('button');
        this.#button.className = 'timer-button'
        this.#button.textContent = 'Задать время'
        this.#container.append(...this.#col);
        this.#wrapper.append(this.#container,this.#button);
    }

    timerTimer() {
        return this.#wrapper;
    }

    trigger() {
        document.body.append(this.timerTimer());
        setTimeout(()=>this.#wrapper.classList.add('open'),0);
    }
}