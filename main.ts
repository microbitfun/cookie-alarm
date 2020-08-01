radio.onReceivedNumberDeprecated(function (receivedNumber) {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    basic.showString("thief")
})
// sender
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
// receiver
radio.setGroup(1)
basic.showString("on")
