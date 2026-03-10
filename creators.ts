
/**
 * Polyrosary blocks
 */
//% weight=75 color=#802170 icon="\uf007"
namespace loaders {

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
     */
    //% block
    export function createWhilstInputHeldLoader(button: controller.Button, func: Function, delay?: number): WhileInputHeldLoader {
        const createdLoader = new WhileInputHeldLoader(button, func, delay);
        return createdLoader;
    }
}