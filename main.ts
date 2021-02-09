let Sending = false
input.onButtonPressed(Button.A, function () {
    radio.setGroup(90)
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
