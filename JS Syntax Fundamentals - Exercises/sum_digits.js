function sumDigits(num){
    let numToString = num.toString()
    let sum = 0
    for (let index = 0; index < numToString.length; index++){
        sum += parseInt(numToString[index])
    }
    console.log(sum)
}
