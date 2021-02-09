let Sending = false
radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    256
    )
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    Sending = true
    while (Sending == true) {
        radio.sendNumber(input.soundLevel())
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Sending = false
    basic.showIcon(IconNames.No)
})
