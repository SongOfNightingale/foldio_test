namespace foldio {
       /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=device_foldio_leftEar block="On Left Ear touch" 
    //%blockExternalInputs=false
    //% shim=foldio::ltouch
    export function lTouch (body : Action): void {
        onPinPressed(TouchPin.P0, body)
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% blockId=device_foldio_rightEar block="On right Ear touch" 
    //%blockExternalInputs=false
    export function rTouch(body: Action): void {
        onPinPressed(TouchPin.P3, body)
    }

}
