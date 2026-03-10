
/**
 * Polyrosary blocks
 */
//% weight=75 color=#802170 icon="\uf007"
namespace polyrosary {

    /**
     * Runs a function after a given number reaches zero.
     * @param interval The interval between each load (in millis).
     * @param func The loaded function upon the interval reaching zero.
     */
    //% block
    export function createTickingLoader(interval: number, func: Function): TickingLoader {
        const createdLoader = new TickingLoader(interval, func);
        return createdLoader;
    }

    /**
     * Runs a function while a given input is pressed.
     * @param button The button that is checked.
     * @param func The function loaded while the button is pressed.
     * @param delay The delay between function loads.
     */
    //% block
    export function createWhilstInputHeldLoader(button: controller.Button, func: Function, delay?: number): WhileInputHeldLoader {
        const createdLoader = new WhileInputHeldLoader(button, func, delay);
        return createdLoader;
    }

    /**
     * Runs a function while the game is paused.
     * @param func The function loaded while the game is paused.
     */
    //% block
    export function createOnGamePausedLoader(func: Function): OnGamePausedLoader {
        const createdLoader = new OnGamePausedLoader(func);
        return createdLoader;
    }
}
