let item = 0
basic.forever(() => {
    item = input.compassHeading()
    if (item < 0 && item <= 45) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (item < 45 && item <= 90) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            if (item < 90 && item <= 135) {
                basic.showArrow(ArrowNames.West)
            } else {
                if (item < 135 && item <= 180) {
                    basic.showArrow(ArrowNames.SouthWest)
                } else {
                    if (item < 180 && item <= 225) {
                        basic.showArrow(ArrowNames.South)
                    } else {
                        if (item < 225 && item <= 270) {
                            basic.showArrow(ArrowNames.SouthEast)
                        } else {
                            if (item < 270 && item <= 315) {
                                basic.showArrow(ArrowNames.East)
                                if (item < 315 && item <= 360) {
                                    basic.showArrow(ArrowNames.NorthEast)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.pause(250)
})
