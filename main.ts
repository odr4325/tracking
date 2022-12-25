function 右をむく () {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function 左をむく () {
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 止まる () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function 後ろにすすむ () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
}
function 前にすすむ () {
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
}
let 赤外線センサー左の値 = 0
let 赤外線センサー右の値 = 0
pins.digitalWritePin(DigitalPin.P12, 1)
basic.forever(function () {
    赤外線センサー右の値 = pins.digitalReadPin(DigitalPin.P1)
    赤外線センサー左の値 = pins.digitalReadPin(DigitalPin.P2)
    if (赤外線センサー右の値 == 1 || 赤外線センサー左の値 == 1) {
        止まる()
        basic.pause(500)
        後ろにすすむ()
        basic.pause(1000)
        if (赤外線センサー右の値 == 1) {
            左をむく()
        } else if (赤外線センサー左の値 == 1) {
            右をむく()
        }
        basic.pause(500)
        止まる()
        basic.pause(500)
    } else {
        前にすすむ()
    }
})
