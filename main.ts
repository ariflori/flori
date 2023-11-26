let temperature = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + "C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (temperature + 273.15) + "K")
})
basic.forever(function () {
    temperature = input.temperature()
})
