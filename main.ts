input.onButtonPressed(Button.A, function () {
    hummingbird.setPositionServo(FourPort.Two, 170)
    hummingbird.setPositionServo(FourPort.One, 170)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    hummingbird.setPositionServo(FourPort.Two, 10)
    hummingbird.setPositionServo(FourPort.One, 10)
    basic.showIcon(IconNames.Fabulous)
})
hummingbird.startHummingbird()
basic.showIcon(IconNames.Yes)
