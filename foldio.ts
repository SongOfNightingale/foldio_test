namespace foldio {
    export function onPinPressed(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxtcore.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }

    export function onPinReleased(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxtcore.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_UP, handler);
    }

    export function pinIsPressed(pinId: number): boolean {
        let pin = getPin(pinId);
        if (!pin) return false;
        return pin.isTouched();
    }
}
