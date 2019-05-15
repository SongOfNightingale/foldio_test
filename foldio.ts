/**
 * Foldio functions
 */
//% weight=70 icon="\uf1db" color=#EC7505
namespace foldio {
      /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=device_foldio_onPinPressed block="On Pin Pressed"
    //% shim=foldio::opp
    export function onPinPressed(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxtcore.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=device_foldio_onPinReleased block="On Pin Released" 
    //% shim=foldio::opr
    export function onPinReleased(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxtcore.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_UP, handler);
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=device_foldio_pinIsPressed block="Pin is Pressed" 
    //% shim=foldio::pip
    export function pinIsPressed(pinId: number): boolean {
        let pin = getPin(pinId);
        if (!pin) return false;
        return pin.isTouched();
    }
}
