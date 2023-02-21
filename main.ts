input.onButtonPressed(Button.A, function () {
    PixelA.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    PixelA.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    PixelA.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    PixelA.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    PixelA.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.B, function () {
    PixelA.clear()
    PixelA.show()
})
let PixelA: neopixel.Strip = null
PixelA = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    PixelA.rotate(1)
    PixelA.show()
})
