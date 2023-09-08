function circleArea(symbol){
    if (typeof symbol == 'number') {
        console.log((Math.PI * (symbol ** 2)).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof symbol}.`)
    }
}
