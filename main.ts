let X = 0
let Y = 0
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P4)
    Y = pins.analogReadPin(AnalogPin.P0)
    serial.writeLine("" + convertToText(X) + ("\",\"" + convertToText(Y)))
    basic.clearScreen()
    led.plot(X / 205, Y / 205)
})
