namespace foldio {
    /**
	* Control of the Foldio animal.
	*/
	//% Id=device_no_blockID block="my block"  icon="\uF006" color=#e59920 weight=97
    /**
     * Do something when a pin is released.
     * @param name the pin that needs to be released, eg: TouchPin.P0
     * @param body the code to run when the pin is released
     */
    //% help=input/on-pin-released weight=6 blockGap=8
    //% blockId=device_ear_touched block="on Ear %NAME|Touched"
	export function onEarPressed(name : TouchPin, body : Action) {
        let pin = getPin(name);
        if (!pin) return;

        // Forces the PIN to switch to makey-makey style detection.
        pin.isTouched();
        pxtcore.registerWithDal(name, MICROBIT_BUTTON_EVT_CLICK, body);
    }

}

}
