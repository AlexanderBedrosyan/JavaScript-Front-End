function revealWords(word, sentence) {
    let firstArea = []
    if (word.includes(', ')){
        firstArea = word.split(', ')
    } else {
        firstArea = [word]
    }
    let arr = sentence.split(' ');
    for (let index = 0; index < arr.length; index++){
        for (let i = 0; i < firstArea.length; i++){
            if (arr[index] === '*'.repeat(firstArea[i].length)){
                arr[index] = firstArea[i]
            }
        }
    }
    console.log(arr.join(' '))
}
