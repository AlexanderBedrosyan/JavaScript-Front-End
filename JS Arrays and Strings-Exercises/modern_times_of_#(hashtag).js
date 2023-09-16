function specialWordsFinder(sentence){
    let arr = [];
    if (sentence.includes(' ')){
        arr = sentence.split(' ')
    } else {
        arr = [sentence]
    }
    for (let index = 0; index < arr.length; index++){
        if (arr[index].length > 1 && arr[index][0] === '#'){
            let newWord = arr[index].slice(1)
            if (/^[A-Za-z\s]*$/.test(newWord)){
                console.log(newWord)
            }
        }
    }
}
