function arrayRotation(arr, numberOfRotations){
    for (let index = 0; index < numberOfRotations; index++){
        firstNumber = arr.shift()
        arr.push(firstNumber)
    }
    console.log(arr.join(" "))
}
