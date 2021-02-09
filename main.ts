let Sending = false
radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    256
    )
})
input.onButtonPressed(Button.A, function () {
    Sending = true
    while (Sending == true) {
        radio.sendNumber(input.soundLevel())
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Sending = false
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
