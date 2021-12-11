input.onButtonPressed(Button.A, function () {
    TobbieII.dance(2)
    TobbieII.vibrate(3)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(10000)
})
let temp = 0
let hioahf = 1
basic.forever(function () {
    temp = input.temperature() - 5
})
basic.forever(function () {
    if (TobbieII.RBlock(20)) {
        hioahf = 0
        basic.showNumber(temp)
        TobbieII.vibrate(5)
        if (temp < 0) {
            basic.showString("brr")
        } else if (temp < 10) {
            for (let index = 0; index < 4; index++) {
                basic.showString("kachel")
            }
        } else if (temp < 20) {
            basic.showString("waarom staat de kachel niet aan?")
            TobbieII.vibrate(5)
        } else if (temp < 25) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (TobbieII.LBlock(20)) {
        hioahf = 0
        basic.showNumber(temp)
        TobbieII.vibrate(5)
        if (temp < 0) {
            basic.showString("brr")
        } else if (temp < 10) {
            for (let index = 0; index < 4; index++) {
                basic.showString("kachel")
            }
        } else if (temp < 20) {
            basic.showString("waarom staat de kachel niet aan?")
            TobbieII.vibrate(5)
        } else if (temp < 25) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (temp > 25) {
        TobbieII.dance(2)
        TobbieII.vibrate(3)
        basic.showLeds(`
            . . . . .
            . # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(10000)
    }
})
