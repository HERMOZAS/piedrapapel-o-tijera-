radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Mi_jugada == 1) {
            basic.showString("EMPATE :O")
        }
        if (Mi_jugada == 2) {
            basic.showString("PERDISTE :(")
        }
        if (Mi_jugada == 3) {
            basic.showString("GANASTE :D")
        }
    }
    if (receivedNumber == 2) {
        if (Mi_jugada == 2) {
            basic.showString("EMPATE :O")
        }
        if (Mi_jugada == 3) {
            basic.showString("PERDISTE :(")
        }
        if (Mi_jugada == 1) {
            basic.showString("GANASTE :D")
        }
    }
    if (receivedNumber == 3) {
        if (Mi_jugada == 1) {
            basic.showString("PERDISTE :(")
        }
        if (Mi_jugada == 2) {
            basic.showString("GANASTE :D")
        }
        if (Mi_jugada == 3) {
            basic.showString("EMPATE :O")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Mi_jugada = 1
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Mi_jugada = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Mi_jugada = 2
    radio.sendNumber(2)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
})
let Mi_jugada = 0
radio.setGroup(19)
