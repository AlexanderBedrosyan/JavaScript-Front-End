function everyNthElement(arr, n){
    const newArr = [];
    for (let index = 0; index < arr.length; index++){
        if (index % n == 0){
            newArr.push(arr[index])
        }
    }
    return newArr
}
