input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
    basic.showNumber(motions)
    motions = 0
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    if (0 < 10) {
        time = "" + time + "0"
    }
    time = "" + time + minutes
    if (hours > 12) {
        adjust = hours - 12
    } else {
        if (hours == 0) {
            adjust = 12
        }
        adjust = hours
    }
    if (ampm) {
        if (ampm) {
            hours = hours
        }
    }
})
let ampm = false
let adjust = 0
let time = ""
let minutes = 0
let hours = 0
let motions = 0
motions = 0
basic.showNumber(motions)
hours = 0
minutes = 0
time = ""
adjust = 0
ampm = false
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
