import {Module} from '../core/module';

export class TimerModule extends Module {
    constructor() {
        super("timer","таймер");
    }

    trigger() {
        console.log("таймер");
    }
}