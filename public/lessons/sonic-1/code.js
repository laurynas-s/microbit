/**
 * Daktaro Kas garsinio atsuktuvo Microbit kodas, v1.0
 *
 * Doctor Who sonic driver code for Microbit, v1.0
 */
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Diamond)
    while (input.buttonIsPressed(Button.A)) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        music.playTone(784, music.beat(BeatFraction.Eighth))
    }
}
if (input.buttonIsPressed(Button.B)) {
    basic.showIcon(IconNames.Square)
    while (input.buttonIsPressed(Button.B)) {
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        music.playTone(220, music.beat(BeatFraction.Sixteenth))
    }
}
led.toggle(Math.random(5), Math.random(5))
})

