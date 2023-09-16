function PascalCase(text){
    let word = '';
    let arr = []
    let neededArr = text.split('')
    for (let index = 0; index < neededArr.length; index++){
        if (index === 0){
            word += neededArr[index];
            continue
        }
        if (neededArr[index].toUpperCase() === neededArr[index]){
            arr.push(word)
            word = neededArr[index]
        } else {
            word += neededArr[index]
        }
    }
    if (word){
        arr.push(word)
    }
    console.log(arr.join(', '))
}
