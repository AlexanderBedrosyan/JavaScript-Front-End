function ReverseArrOfNumbers(number, arr){
    newArray = []
    for (let index = 0; index < number; index++){
        newArray.unshift(arr[index])
    }
    console.log(newArray.join(' '))
}

