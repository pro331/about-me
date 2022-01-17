input.onButtonPressed(Button.A, function () {
    basic.showString("My name is: ")
    basic.showString("Rudra!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("My age is: ")
    basic.showNumber(9)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("My favorite color is: ")
    basic.showString("Red")
})
