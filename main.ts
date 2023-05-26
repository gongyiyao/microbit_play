input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    music.playTone(988, music.beat(BeatFraction.Double))
    SuperBit.Servo2(SuperBit.enServo.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    music.playTone(330, music.beat(BeatFraction.Half))
    SuperBit.Servo2(SuperBit.enServo.S1, 90)
})
SuperBit.Servo2(SuperBit.enServo.S1, 90)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
