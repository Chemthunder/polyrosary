/*
Multiple
Tick events, a loader system that will run a function at an interval
loader can run 'bootstrap' and begin ticking its function at the interval.
*/

class TickingLoader {
    _interval: number;
    _event: Function;

    constructor(tickInterval: number, event: Function) {
        this._interval = tickInterval;
        this._event = event;
    }

    get tickInterval(): number {
        return this._interval;
    }

    get event(): Function {
        return this._event;
    }

    set tickInterval(interval: number) {
        this.tickInterval = interval;
    }

    set event(func: Function) {
        this.event = func;
    }

    bootstrap() {
        try {
            if (this.event != null) {
                let inter: number = this.tickInterval;
                let max: number = this.tickInterval;

                forever(function () {
                    if (inter > 0) {
                        inter--;
                    } else {
                        inter = max;
                        this.event();
                    }
                });
            }
        } catch {
            control.fail("Invalid event!");
        }
    }
}

class WhileInputHeldLoader {
    _input: controller.Button;
    _event: Function;
    _delay: number;

    constructor(input: controller.Button, event: Function, delay?: number) {
        this._input = input;
        this._event = event;
        this._delay = delay;
    }

    get input(): controller.Button {
        return this._input;
    }

    get event(): Function {
        return this._event;
    }

    get delay(): number {
        return this._delay;
    }

    set input(additionalInput: controller.Button) {
        this.input = additionalInput;
    }

    set event(func: Function) {
        this.event = func;
    }

    set delay(newDelay: number) {
        this.delay = newDelay;
    }

    bootstrap() {
        try {
            if (this.event != null) {
                let button = this.input;
                let delay = this.delay;
                let max = this.delay;

                forever(function () {
                    if (button.isPressed()) {
                        if (max > 0) {
                            if (delay > 0) {
                                delay--;
                                if (delay == 0) {
                                    delay = max;
                                    this.event();
                                }
                            }
                        } else {
                            this.event();
                        }
                    }
                });
            }
        } catch {
            control.fail("Invalid loader!");
        }
    }
}

// on variable changed

// on created sprite of any kind


let test = new TickingLoader(40, testLoad);
test.bootstrap();

function testLoad() {
    // console.log("did the thing")
}

let inputTest = new WhileInputHeldLoader(controller.A, secondLoad)
inputTest.bootstrap();

function secondLoad() {
    console.log("Did the thing AGAIN oml")
}
