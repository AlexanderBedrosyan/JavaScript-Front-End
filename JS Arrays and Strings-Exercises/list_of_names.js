function sortedNames(arr){
    arr.sort((a, b) => a.localeCompare(b))
    const newArr = [];
    for (let index = 1; index <= arr.length; index++){
        newArr.push(`${index}.${arr[index- 1]}`)
    }
    console.log(newArr.join('\n'))
}
