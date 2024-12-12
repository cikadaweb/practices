import { EventEmitter } from 'node:events';

class Timer extends EventEmitter {
    constructor() {
        super();
        this.timer = 0;
    }

    incrementTimer() {
        this.timer++;
    }

    printTimer() {
        console.log('timer:', this.timer);
    }
}

const timer = new Timer();

timer.on('tick', () => {
    timer.incrementTimer();
    timer.printTimer();
});

const startTimer = (interval) => {
    function tick() {
        timer.emit('tick');
        setTimeout(tick, interval);
    }
    tick();
}

startTimer(1000);
