input.onButtonPressed(Button.A, function () {
    colorbit_51bit.showColor(colorbit.colors(BitColors.Red))
    colorbit_51bit.show()
})
input.onButtonPressed(Button.B, function () {
    colorbit_51bit.clear()
    colorbit_51bit.show()
})
let colorbit_51bit: colorbit.Strip = null
basic.showIcon(IconNames.Yes)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.show()
basic.forever(function () {
	
})
