function sortingNumbers(arr){
    arr.sort(function(a, b){return a-b});
    let newArr = [];
    while (arr.length > 0){
        newArr.push(arr.shift());
        if (arr){
            newArr.push(arr.pop())
        }
    }
    return newArr
}
